import os
import django

# Set up Django environment
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'Pcodeshestergn.settings')
django.setup()

from maintenance.models import MaintenanceCategory, MaintenanceService
from formations.models import Formation
from services.models import Service

def populate():
    print("Populating database...")

    # --- Maintenance Categories & Services ---
    categories_data = [
        {
            "name": "Maintenance Imprimantes",
            "icon": "fas fa-print",
            "description": "Réparation et entretien spécialisé pour imprimantes Epson et HP.",
            "services": [
                {"title": "Entretien Epson EcoTank", "description": "Nettoyage têtes, remise à zéro tampon, optimisation.", "price_start": "150,000"},
                {"title": "Réparation Laser HP", "description": "Remplacement de four, nettoyage laser, résolution bourrages.", "price_start": "250,000"},
                {"title": "Déblocage têtes de lecture", "description": "Débouchage profond pour encres séchées.", "price_start": "100,000"},
            ]
        },
        {
            "name": "Maintenance PC & Laptops",
            "icon": "fas fa-laptop",
            "description": "Réparation matérielle et logicielle de vos ordinateurs.",
            "services": [
                {"title": "Nettoyage physique & Pâte thermique", "description": "Évite la surchauffe et prolonge la durée de vie.", "price_start": "150,000"},
                {"title": "Optimisation Système (Windows)", "description": "Suppression virus, accélération du démarrage.", "price_start": "100,000"},
                {"title": "Récupération de données", "description": "Récupération suite à panne disque dur ou suppression.", "price_start": "300,000"},
            ]
        },
        {
            "name": "Photographie & Identité",
            "icon": "fas fa-camera",
            "description": "Services de photographie professionnelle et tirage minute.",
            "services": [
                {"title": "Photos d'identité (x8)", "description": "Format passeport, permis ou carte d'identité.", "price_start": "30,000"},
                {"title": "Portrait Professionnel", "description": "Séance photo pour CV ou profils sociaux.", "price_start": "150,000"},
                {"title": "Tirage Photo numérique", "description": "Impression haute qualité tous formats.", "price_start": "5,000"},
            ]
        },
        {
            "name": "Conseils & Technologie",
            "icon": "fas fa-lightbulb",
            "description": "Accompagnement dans vos choix technologiques.",
            "services": [
                {"title": "Audit de parc informatique", "description": "Analyse de vos équipements et recommandations.", "price_start": "500,000"},
                {"title": "Conseil en achat matériel", "description": "Aide au choix du meilleur équipement selon budget.", "price_start": "100,000"},
                {"title": "Sécurisation réseau WiFi", "description": "Configuration sécurisée pour PME et domiciles.", "price_start": "200,000"},
            ]
        }
    ]

    for cat_data in categories_data:
        category, created = MaintenanceCategory.objects.get_or_create(
            name=cat_data["name"],
            defaults={"icon": cat_data["icon"], "description": cat_data["description"]}
        )
        if created:
            print(f"Created category: {category.name}")
        
        for svc_data in cat_data["services"]:
            service, created = MaintenanceService.objects.get_or_create(
                category=category,
                title=svc_data["title"],
                defaults={"description": svc_data["description"], "price_start": svc_data["price_start"]}
            )
            if created:
                print(f"  Created service: {service.title}")

    # --- Basic IT Formations ---
    formations_data = [
        {
            "title": "Informatique de Base : Windows & Internet",
            "description": "Apprendre à utiliser un ordinateur, manipuler des fichiers et naviguer sur le web en sécurité.",
            "price": "500,000",
            "certifier": True
        },
        {
            "title": "Bureautique : Microsoft Office (Word, Excel)",
            "description": "Maîtriser la création de documents et le traitement de données sous Excel.",
            "price": "750,000",
            "certifier": True
        },
        {
            "title": "Maintenance 1er niveau",
            "description": "Savoir diagnostiquer les pannes simples et entretenir son propre matériel.",
            "price": "600,000",
            "certifier": True
        }
    ]

    for form_data in formations_data:
        formation, created = Formation.objects.get_or_create(
            title=form_data["title"],
            defaults={
                "description": form_data["description"],
                "price": form_data["price"],
                "certifier": form_data["certifier"],
                "publish_name": "Administrateur"
            }
        )
        if created:
            print(f"Created formation: {formation.title}")

    print("Population completed successfully!")

if __name__ == "__main__":
    populate()
