"""
Script pour restaurer la base de données depuis PythonAnywhere.

Usage:
    python scripts/restore_database.py <chemin_vers_db_telecharge>

Exemple:
    python scripts/restore_database.py C:\\Users\\codeshester0011\\Downloads\\db.sqlite3
"""

import os
import sys
import shutil
from datetime import datetime
from pathlib import Path

# Configuration
BASE_DIR = Path(__file__).resolve().parent.parent
DB_PATH = BASE_DIR / 'db.sqlite3'
BACKUP_DIR = BASE_DIR / 'backups'

def create_backup():
    """Crée une sauvegarde de la base de données actuelle."""
    if not DB_PATH.exists():
        print("⚠️  Aucune base de données locale trouvée. Pas de sauvegarde nécessaire.")
        return None
    
    # Créer le dossier de sauvegarde s'il n'existe pas
    BACKUP_DIR.mkdir(exist_ok=True)
    
    # Nom du fichier de sauvegarde avec timestamp
    timestamp = datetime.now().strftime('%Y%m%d_%H%M%S')
    backup_path = BACKUP_DIR / f'db_backup_{timestamp}.sqlite3'
    
    # Copier la base de données
    shutil.copy2(DB_PATH, backup_path)
    print(f"✅ Sauvegarde créée : {backup_path}")
    return backup_path

def restore_database(source_path):
    """Restaure la base de données depuis le fichier source."""
    source = Path(source_path)
    
    if not source.exists():
        print(f"❌ Erreur : Le fichier {source_path} n'existe pas.")
        return False
    
    # Vérifier que c'est bien un fichier SQLite
    if source.stat().st_size == 0:
        print(f"❌ Erreur : Le fichier {source_path} est vide.")
        return False
    
    # Créer une sauvegarde de la base actuelle
    print("\n📦 Sauvegarde de la base de données actuelle...")
    create_backup()
    
    # Restaurer la nouvelle base
    print(f"\n🔄 Restauration de la base de données depuis {source_path}...")
    shutil.copy2(source, DB_PATH)
    print(f"✅ Base de données restaurée avec succès !")
    
    return True

def verify_database():
    """Vérifie le contenu de la base de données restaurée."""
    print("\n🔍 Vérification du contenu de la base de données...")
    
    # Importer Django
    os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'Pcodeshestergn.settings')
    import django
    django.setup()
    
    from formations.models import Formation
    from services.models import Service
    from maintenance.models import MaintenanceRequest
    
    formations_count = Formation.objects.count()
    services_count = Service.objects.count()
    maintenance_count = MaintenanceRequest.objects.count()
    
    print(f"\n📊 Résultats :")
    print(f"   Formations : {formations_count}")
    print(f"   Services : {services_count}")
    print(f"   Demandes de maintenance : {maintenance_count}")
    
    if formations_count == 0 and services_count == 0:
        print("\n⚠️  ATTENTION : La base de données restaurée semble vide !")
        print("   Vérifiez que vous avez téléchargé le bon fichier depuis PythonAnywhere.")
    else:
        print("\n✅ La base de données contient des données !")
    
    return formations_count + services_count + maintenance_count > 0

def main():
    print("=" * 60)
    print("🔧 Script de Restauration de Base de Données")
    print("=" * 60)
    
    if len(sys.argv) < 2:
        print("\n❌ Erreur : Chemin du fichier source manquant.")
        print("\nUsage :")
        print("   python scripts/restore_database.py <chemin_vers_db_telecharge>")
        print("\nExemple :")
        print("   python scripts/restore_database.py C:\\Users\\codeshester0011\\Downloads\\db.sqlite3")
        sys.exit(1)
    
    source_path = sys.argv[1]
    
    # Restaurer la base de données
    if restore_database(source_path):
        # Vérifier le contenu
        verify_database()
        print("\n" + "=" * 60)
        print("✅ Restauration terminée avec succès !")
        print("=" * 60)
        print("\n💡 Prochaines étapes :")
        print("   1. Démarrez le serveur Django : py manage.py runserver")
        print("   2. Démarrez le serveur React : cd frontend && npm run dev")
        print("   3. Vérifiez que les données s'affichent correctement")
    else:
        print("\n❌ La restauration a échoué.")
        sys.exit(1)

if __name__ == '__main__':
    main()
