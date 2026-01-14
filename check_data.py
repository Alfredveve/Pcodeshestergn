import os
import django

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'Pcodeshestergn.settings')
django.setup()

from formations.models import Formation
from services.models import Service
from maintenance.models import MaintenanceRequest

print("=" * 60)
print("📊 CONTENU DE LA BASE DE DONNÉES")
print("=" * 60)
print()

formations = Formation.objects.all()
print(f"✅ Formations : {formations.count()}")
if formations.exists():
    for f in formations[:5]:
        print(f"   • {f.title}")
    if formations.count() > 5:
        print(f"   ... et {formations.count() - 5} autres")
else:
    print("   ⚠️  Aucune formation trouvée")

print()

services = Service.objects.all()
print(f"✅ Services : {services.count()}")
if services.exists():
    for s in services[:5]:
        print(f"   • {s.title}")
    if services.count() > 5:
        print(f"   ... et {services.count() - 5} autres")
else:
    print("   ⚠️  Aucun service trouvé")

print()

maintenance = MaintenanceRequest.objects.all()
print(f"✅ Demandes de Maintenance : {maintenance.count()}")
if maintenance.exists():
    for m in maintenance[:3]:
        print(f"   • {m.subject} ({m.status})")
    if maintenance.count() > 3:
        print(f"   ... et {maintenance.count() - 3} autres")
else:
    print("   ⚠️  Aucune demande de maintenance trouvée")

print()
print("=" * 60)

# Résumé
total = formations.count() + services.count() + maintenance.count()
if total == 0:
    print("⚠️  LA BASE DE DONNÉES EST VIDE")
    print("=" * 60)
    print("\n💡 Solutions :")
    print("   1. Récupérez les données depuis PythonAnywhere")
    print("   2. Créez des données de démonstration")
    print("   3. Ajoutez des données via l'admin Django")
else:
    print(f"✅ TOTAL : {total} enregistrements trouvés")
    print("=" * 60)
