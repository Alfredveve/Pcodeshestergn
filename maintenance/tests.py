from django.test import TestCase
from django.urls import reverse
from rest_framework.test import APITestCase
from rest_framework import status
from .models import MaintenanceCategory, MaintenanceService, MaintenanceRequest

class MaintenanceModelTest(TestCase):
    def setUp(self):
        self.category = MaintenanceCategory.objects.create(
            name="Ordinateurs",
            icon="fas fa-laptop",
            description="Réparation d'ordinateurs."
        )
        self.service = MaintenanceService.objects.create(
            category=self.category,
            title="Réparation Écran",
            description="Remplacement d'écran LED.",
            price_start="25000"
        )

    def test_category_creation(self):
        self.assertEqual(self.category.name, "Ordinateurs")
        self.assertEqual(str(self.category), "Ordinateurs")

    def test_service_creation(self):
        self.assertEqual(self.service.title, "Réparation Écran")
        self.assertEqual(str(self.service), "Réparation Écran (Ordinateurs)")

class MaintenanceAPITest(APITestCase):
    def setUp(self):
        self.category = MaintenanceCategory.objects.create(
            name="Imprimantes",
            icon="fas fa-print",
            description="Maintenance d'imprimantes."
        )
        self.service = MaintenanceService.objects.create(
            category=self.category,
            title="Nettoyage Têtes",
            description="Nettoyage en profondeur.",
            price_start="15000"
        )

    def test_get_maintenance_categories(self):
        url = reverse('api-maintenance-categories')
        response = self.client.get(url)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(len(response.data), 1)

    def test_create_maintenance_request(self):
        url = reverse('api-maintenance-request')
        data = {
            'service': self.service.id,
            'full_name': 'Alice Smith',
            'email': 'alice@example.com',
            'phone': '+224666000000',
            'equipment_model': 'Epson L3110',
            'problem_description': 'Bourrage papier fréquent.'
        }
        response = self.client.post(url, data)
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(MaintenanceRequest.objects.count(), 1)
        self.assertEqual(MaintenanceRequest.objects.first().status, 'pending')
