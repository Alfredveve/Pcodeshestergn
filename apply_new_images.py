import os
import django

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'Pcodeshestergn.settings')
django.setup()

from formations.models import Formation
from services.models import Service
from maintenance.models import MaintenanceService

def update_images():
    # Update Formations
    # CEH
    updated = Formation.objects.filter(title__icontains='CEH').update(image='formations/image/cyber_ceh.png')
    print(f"Updated {updated} CEH formations.")
    
    # Django
    updated = Formation.objects.filter(title__icontains='Django').update(image='formations/image/django_dev_modern.png')
    print(f"Updated {updated} Django formations.")

    # Update Services
    # Printer repair
    updated = Service.objects.filter(title__icontains='imprimante').update(image='services/images/printer_repair_pro.png')
    print(f"Updated {updated} Printer services.")
    
    updated = Service.objects.filter(title__icontains='Epson').update(image='services/images/printer_repair_pro.png')
    print(f"Updated {updated} Epson services.")

    # Identity Photo
    updated = Service.objects.filter(title__icontains='Photo').update(image='services/images/identity_photo_studio.png')
    print(f"Updated {updated} Photo services.")

    # Update Maintenance
    # Epson specific
    updated = MaintenanceService.objects.filter(title__icontains='Epson').update(image='maintenance/services/epson_l3250_maintenance.png')
    print(f"Updated {updated} Epson maintenance services.")

    # Server/Network
    updated = MaintenanceService.objects.filter(title__icontains='Serveur').update(image='maintenance/services/server_maintenance.png')
    print(f"Updated {updated} Server maintenance services.")
    
    updated = MaintenanceService.objects.filter(title__icontains='Réseau').update(image='maintenance/services/server_maintenance.png')
    print(f"Updated {updated} Network maintenance services.")

if __name__ == "__main__":
    update_images()
