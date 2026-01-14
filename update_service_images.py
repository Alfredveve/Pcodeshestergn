import os
import django

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'codeshestergn.settings')
django.setup()

from services.models import Service

# Update service images
updates = [
    (1, 'services/images/epson_l3250_maintenance.png'),
    (3, 'services/images/epson_repair_general.png'),
    (6, 'services/images/printer_maintenance_service.png'),
    (8, 'services/images/epson_specialized_repair.png'),
]

for service_id, image_path in updates:
    try:
        service = Service.objects.get(id=service_id)
        service.image = image_path
        service.save()
        print(f'✓ Updated service {service_id}: {service.title} -> {image_path}')
    except Service.DoesNotExist:
        print(f'✗ Service {service_id} not found')
    except Exception as e:
        print(f'✗ Error updating service {service_id}: {e}')

print('\n✓ All service images updated successfully!')
