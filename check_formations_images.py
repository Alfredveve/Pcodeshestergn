import os
import django
import sys

# Setup Django environment
sys.path.append(os.getcwd())
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'Pcodeshestergn.settings')
django.setup()

from formations.models import Formation
from django.conf import settings

output = []
output.append(f"MEDIA_ROOT: {settings.MEDIA_ROOT}")

formations = Formation.objects.all()
for f in formations:
    output.append(f"Formation: {f.title}")
    if f.image:
        output.append(f"  Image Field: {f.image}")
        output.append(f"  Image Path: {f.image.path}")
        if os.path.exists(f.image.path):
            output.append("  [OK] File exists")
        else:
            output.append("  [MISSING] File does not exist")
    else:
        output.append("  [NULL] No image assigned")
    output.append("-" * 20)

with open('check_output.txt', 'w', encoding='utf-8') as f_out:
    f_out.write('\n'.join(output))

print("Check complete. See check_output.txt")
