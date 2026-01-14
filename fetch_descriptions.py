
import os
import django
import json

os.environ.setdefault("DJANGO_SETTINGS_MODULE", "Pcodeshestergn.settings")
django.setup()

from services.models import Service
from formations.models import Formation
from maintenance.models import MaintenanceService

def get_data():
    data = {
        "services": [],
        "formations": [],
        "maintenance_services": []
    }

    print("--- Services ---")
    for s in Service.objects.all():
        item = {"id": s.id, "title": s.title, "description": s.description}
        data["services"].append(item)
        print(f"ID: {s.id}, Title: {s.title}")
        print(f"Description: {s.description}\n")

    print("--- Formations ---")
    for f in Formation.objects.all():
        item = {"id": f.id, "title": f.title, "description": f.description}
        data["formations"].append(item)
        print(f"ID: {f.id}, Title: {f.title}")
        print(f"Description: {f.description}\n")

    print("--- Maintenance Services ---")
    for m in MaintenanceService.objects.all():
        item = {"id": m.id, "title": m.title, "category": m.category.name, "description": m.description}
        data["maintenance_services"].append(item)
        print(f"ID: {m.id}, Title: {m.title} ({m.category.name})")
        print(f"Description: {m.description}\n")
    
    with open('current_descriptions.json', 'w', encoding='utf-8') as f:
        json.dump(data, f, indent=4, ensure_ascii=False)

if __name__ == "__main__":
    get_data()
