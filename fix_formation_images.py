import os
import django
import sys
import shutil

# Setup Django environment
sys.path.append(os.getcwd())
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'Pcodeshestergn.settings')
django.setup()

from formations.models import Formation
from django.conf import settings

# Paths
brain_dir = r"C:\Users\codeshester0011\.gemini\antigravity\brain\ec6ac6d4-23af-4882-a716-0fb1d21e4d38"
generated_img_src = os.path.join(brain_dir, "informatique_base_1768334699266.png")
maintenance_src_img = os.path.join(settings.MEDIA_ROOT, "services", "images", "epson_repair_general.png")

target_dir = os.path.join(settings.MEDIA_ROOT, "formations", "image")

# Define mappings (Formation Title -> Target Filename, Source Path)
updates = [
    {
        "title": "Informatique de Base : Windows & Internet",
        "filename": "informatique_base.png",
        "source": generated_img_src
    },
    {
        "title": "Bureautique : Microsoft Office (Word, Excel)",
        "filename": "bureautique.png",
        "source": generated_img_src 
    },
    {
        "title": "Maintenance 1er niveau",
        "filename": "maintenance_1.png",
        "source": maintenance_src_img
    }
]

print("Starting image fix process...")

for update in updates:
    try:
        formation = Formation.objects.get(title=update["title"])
        
        target_path = os.path.join(target_dir, update["filename"])
        
        # Copy file
        if os.path.exists(update["source"]):
            shutil.copy2(update["source"], target_path)
            print(f"Copied {update['source']} to {target_path}")
            
            # Update DB
            # ImageField stores relative path from MEDIA_ROOT
            relative_path = os.path.join("formations", "image", update["filename"])
            # Normalize slashes for DB consistency if needed, though Django handles it.
            # But let's just assign relative path.
            formation.image = relative_path
            formation.save()
            print(f"Updated formation '{formation.title}' with image '{relative_path}'")
        else:
            print(f"Source file not found: {update['source']}")
            
    except Formation.DoesNotExist:
        print(f"Formation not found: {update['title']}")
    except Exception as e:
        print(f"Error updating {update['title']}: {e}")

print("Done.")
