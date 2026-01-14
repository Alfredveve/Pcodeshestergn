from django.test import TestCase
from django.urls import reverse
from rest_framework.test import APITestCase
from rest_framework import status
from .models import Service, ContactService

class ServiceModelTest(TestCase):
    def setUp(self):
        self.service = Service.objects.create(
            title="Design Graphique",
            description="Création de logos et supports visuels.",
            price="50000",
            publish_name="Codeshester"
        )

    def test_service_creation(self):
        self.assertEqual(self.service.title, "Design Graphique")
        self.assertEqual(str(self.service), "Design Graphique")

class ServiceAPITest(APITestCase):
    def setUp(self):
        self.service = Service.objects.create(
            title="Développement Web",
            description="Création de sites internet.",
            price="150000",
            publish_name="Codeshester"
        )
        # Using the URL name defined in home/api_urls.py if possible, 
        # but since I haven't seen the names yet, I'll use the path or look at api_urls.py first.
    
    def test_get_services_list(self):
        url = '/api/services/'
        response = self.client.get(url)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(len(response.data), 1)
        self.assertEqual(response.data[0]['title'], "Développement Web")

    def test_get_service_detail(self):
        url = f'/api/services/{self.service.id}/'
        response = self.client.get(url)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data['title'], "Développement Web")

class ContactServiceModelTest(TestCase):
    def setUp(self):
        self.service = Service.objects.create(title="Maintenance", description="Desc", price="1000", publish_name="Test")
        self.contact = ContactService.objects.create(
            service=self.service,
            nomComplet="Test User",
            pays="GN",
            ville="Conakry",
            tel_whatsapp="+224600000000",
            email="test@example.com",
            message="Need help"
        )

    def test_contact_creation(self):
        self.assertEqual(self.contact.nomComplet, "Test User")
        self.assertEqual(self.contact.service.title, "Maintenance")
