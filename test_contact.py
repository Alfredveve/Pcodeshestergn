"""
Script de test pour vérifier le formulaire de contact
"""
import os
import django

# Configuration Django
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'Pcodeshestergn.settings')
django.setup()

from home.models import ContactMessage

# Créer un message de test
test_message = ContactMessage.objects.create(
    name="Test User",
    email="test@example.com",
    subject="service",
    message="Ceci est un message de test pour vérifier le formulaire de contact."
)

print("✓ Message de test créé avec succès!")
print(f"  ID: {test_message.id}")
print(f"  Nom: {test_message.name}")
print(f"  Email: {test_message.email}")
print(f"  Sujet: {test_message.subject}")
print(f"  Date: {test_message.created_at}")
print(f"  Lu: {test_message.is_read}")

# Vérifier le nombre total de messages
total = ContactMessage.objects.count()
print(f"\n✓ Nombre total de messages: {total}")

# Lister tous les messages
print("\n✓ Liste de tous les messages:")
for msg in ContactMessage.objects.all():
    print(f"  - {msg}")
