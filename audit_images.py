from django.conf import settings
import os
import django

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'Pcodeshestergn.settings') # Assuming project name, but will use setup()
django.setup()

from services.models import Service
from maintenance.models import MaintenanceService
from formations.models import Formation

output_file = 'temp_image_audit.txt'

with open(output_file, 'w', encoding='utf-8') as f:
    f.write("--- SERVICES ---\n")
    for s in Service.objects.all():
        img = s.image.name if s.image else "None"
        f.write(f"SERVICE|{s.id}|{s.title}|{img}\n")
    
    f.write("--- MAINTENANCE ---\n")
    for s in MaintenanceService.objects.all():
        img = s.image.name if s.image else "None"
        f.write(f"MAINTENANCE|{s.id}|{s.title}|{img}\n")

    f.write("--- FORMATIONS ---\n")
    for formation in Formation.objects.all():
        img = formation.image.name if formation.image else "None"
        f.write(f"FORMATION|{formation.id}|{formation.title}|{img}\n")

print(f"Audit written to {output_file}")
