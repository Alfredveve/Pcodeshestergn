import os
import django

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'Pcodeshestergn.settings')
django.setup()

from formations.models import Formation
from services.models import Service

# Fix Formations
formations_to_fix = [
    ('Developpement web', 'formations/image/django_dev.png'),
    ('CEH v13', 'formations/image/coding.png'),
    ('Sécurité Information', 'formations/image/coding.png'),
]

for title_part, img_path in formations_to_fix:
    updated = Formation.objects.filter(title__icontains=title_part).update(image=img_path)
    print(f"Updated {updated} formations matching '{title_part}' -> {img_path}")

# Fix Services
services_to_fix = [
    ('imprimante', 'services/images/printer.png'),
    ('Epson', 'services/images/epson_repair.png'),
    ('Photo', 'services/images/photo.png'),
    ('Photocopie', 'services/images/printer.png'),
    ('Saisie', 'services/images/printer.png'),
    ('Pintestin Web', 'formations/image/coding.png'),
    ('Developpement WEB', 'formations/image/django_dev.png'),
]

for title_part, img_path in services_to_fix:
    updated = Service.objects.filter(title__icontains=title_part).update(image=img_path)
    print(f"Updated {updated} services matching '{title_part}' -> {img_path}")

# For other services with broken images, clear them to trigger fallback icons
# Only clear if the path is known to be broken (doesn't exist)
all_services = Service.objects.all()
for s in all_services:
    if s.image and not os.path.exists(os.path.join('media', s.image.name)):
        print(f"Clearing invalid image path for service: {s.title} ({s.image.name})")
        s.image = ''
        s.save()
