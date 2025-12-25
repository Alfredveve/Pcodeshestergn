import os
import django
import sys

# Set up Django environment
sys.path.append(os.getcwd())
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'Pcodeshestergn.settings')
django.setup()

from home.models import HomeSettings, Partner
from services.models import Service
from formations.models import Formation

def setup_demo_data():
    print("Setting up demo data...")

    # 1. Home Settings
    settings, created = HomeSettings.objects.get_or_create(id=1)
    settings.hero_title = "L'Excellence Technologique à votre Portée"
    settings.hero_subtitle = "Codeshestergn vous accompagne dans votre transformation digitale avec des services de maintenance, bureautique et formation de premier ordre."
    settings.hero_image = "home/hero/hero.png"
    settings.students_count = "1200+"
    settings.satisfaction_rate = "99%"
    settings.years_expertise = "15+"
    settings.support_hours = "24/7"
    settings.save()
    print("- Home settings updated.")

    # 2. Services
    # Printer maintenance
    s1, _ = Service.objects.get_or_create(title="Maintenance d'imprimantes", defaults={'price': '50000'})
    s1.description = "Service professionnel de réparation et entretien pour tous types d'imprimantes (Laser, Jet d'encre, 3D)."
    s1.image = "services/images/printer.png"
    s1.save()

    # Reparation Epson (Specific)
    s1b, _ = Service.objects.get_or_create(title="Réparation Spécialisée Epson", defaults={'price': '75000'})
    s1b.description = "Expertise certifiée pour la remise en état de vos imprimantes Epson (L-series, Workforce, EcoTank). Pièces d'origine garanties."
    s1b.image = "services/images/epson_repair.png"
    s1b.save()

    # Photos
    s2, _ = Service.objects.get_or_create(title="Photos d'identité", defaults={'price': '25000'})
    s2.description = "Prise de vue professionnelle pour vos documents officiels, passeports et visas."
    s2.image = "services/images/photo.png"
    s2.save()
    print("- Services updated with images.")

    # 3. Formations
    # Django
    f1, _ = Formation.objects.get_or_create(title="Développement Web avec Django", defaults={'price': '2500000'})
    f1.description = "Maîtrisez le framework web pour perfectionnistes. Apprenez à créer des applications web robustes, sécurisées et scalables avec Python."
    f1.image = "formations/image/django_dev.png"
    f1.certifier = True
    f1.save()

    # CEH v13
    f2, _ = Formation.objects.get_or_create(title="CEH v13 (Certified Ethical Hacker)", defaults={'price': '5500000'})
    f2.description = "Devenez un expert en sécurité offensive. Apprenez les dernières techniques de hack éthique pour protéger les infrastructures modernes."
    f2.image = "formations/image/coding.png" # Fallback to generic coding for now
    f2.certifier = True
    f2.save()

    # Securite Information
    f3, _ = Formation.objects.get_or_create(title="Sécurité de l'Information", defaults={'price': '3500000'})
    f3.description = "Gouvernance, gestion des risques et conformité. Apprenez à protéger le capital informationnel de votre entreprise."
    f3.image = "formations/image/coding.png" # Fallback
    f3.certifier = True
    f3.save()
    print("- Formations updated with specialized modules.")

    print("Demo data setup complete!")

if __name__ == "__main__":
    setup_demo_data()
