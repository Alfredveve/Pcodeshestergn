import os
import django
import json
from datetime import date, datetime
from decimal import Decimal

# Configuration
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'Pcodeshestergn.settings')
django.setup()

class DjangoJSONEncoder(json.JSONEncoder):
    def default(self, obj):
        if isinstance(obj, (date, datetime)):
            return obj.isoformat()
        if isinstance(obj, Decimal):
            return str(obj)
        return super().default(obj)

def run_export():
    from django.apps import apps
    
    user_apps = ['home', 'formations', 'maintenance', 'services']
    all_fixture_data = []
    
    print("--- Manual Database Export Starting ---")
    for app_label in user_apps:
        try:
            app_config = apps.get_app_config(app_label)
            for model in app_config.get_models():
                queryset = model.objects.all()
                count = queryset.count()
                if count > 0:
                    print(f"Processing {app_label}.{model._meta.model_name} ({count} objects)...")
                    for obj in queryset:
                        fields = {}
                        for field in obj._meta.fields:
                            # Skip primary key from fields if it's the id
                            if field.primary_key:
                                continue
                                
                            val = getattr(obj, field.name)
                            
                            # Handle different field types
                            if val is None:
                                fields[field.name] = None
                            elif hasattr(val, 'pk'): # ForeignKey
                                fields[field.name] = val.pk
                            elif hasattr(val, 'name') and hasattr(obj._meta.get_field(field.name), 'upload_to'): # FileField/ImageField
                                fields[field.name] = val.name
                            else:
                                fields[field.name] = val
                        
                        all_fixture_data.append({
                            "model": f"{app_label}.{model._meta.model_name}",
                            "pk": obj.pk,
                            "fields": fields
                        })
        except Exception as e:
            print(f"[ERROR] App {app_label}: {e}")

    if not all_fixture_data:
        print("!!! No data found to export.")
        return

    print(f"\nWriting {len(all_fixture_data)} objects to 'data.json'...")
    try:
        with open('data.json', 'w', encoding='utf-8') as f:
            json.dump(all_fixture_data, f, indent=4, cls=DjangoJSONEncoder)
        print("\nSUCCESS: 'data.json' has been created successfully.")
    except Exception as e:
        print(f"\nCRITICAL ERROR during file writing: {e}")

if __name__ == "__main__":
    run_export()
