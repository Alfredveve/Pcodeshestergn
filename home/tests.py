from django.test import TestCase
from django.urls import reverse
from rest_framework.test import APITestCase
from rest_framework import status
from .models import HomeSettings, Partner, ContactMessage

class HomeSettingsModelTest(TestCase):
    def setUp(self):
        self.settings = HomeSettings.objects.create(
            hero_title="Codeshester Home",
            hero_subtitle="Subtitle here",
            students_count="100+"
        )

    def test_settings_creation(self):
        self.assertEqual(self.settings.hero_title, "Codeshester Home")

class PartnerModelTest(TestCase):
    def setUp(self):
        self.partner = Partner.objects.create(
            name="Partner One",
            website="https://partnerone.com"
        )

    def test_partner_creation(self):
        self.assertEqual(self.partner.name, "Partner One")
        self.assertEqual(str(self.partner), "Partner One")

class HomeAPITest(APITestCase):
    def test_get_global_data(self):
        url = reverse('api-global-data')
        response = self.client.get(url)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        # Verify keys in response
        self.assertIn('settings', response.data)
        self.assertIn('partners', response.data)
        self.assertIn('services', response.data)

    def test_create_contact_message(self):
        url = reverse('api-contact')
        data = {
            'name': 'John Doe',
            'email': 'john@example.com',
            'subject': 'Demande de devis',
            'message': 'Bonjour, je voudrais un devis pour un site web.'
        }
        response = self.client.post(url, data)
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(ContactMessage.objects.count(), 1)

    def test_contact_messages_content(self):
        ContactMessage.objects.create(name="First", email="a@b.com", subject="S1", message="M1")
        ContactMessage.objects.create(name="Second", email="c@d.com", subject="S2", message="M2")
        self.assertEqual(ContactMessage.objects.count(), 2)
