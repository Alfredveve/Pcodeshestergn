from django.test import TestCase
from django.urls import reverse
from rest_framework.test import APITestCase
from rest_framework import status
from .models import Formation, InscriptionF

class FormationModelTest(TestCase):
    def setUp(self):
        self.formation = Formation.objects.create(
            title="Formation Python",
            description="Apprendre Python de A à Z.",
            price="75000",
            publish_name="Codeshester"
        )

    def test_formation_creation(self):
        self.assertEqual(self.formation.title, "Formation Python")
        self.assertEqual(str(self.formation), "Formation Python")

class FormationAPITest(APITestCase):
    def setUp(self):
        self.formation = Formation.objects.create(
            title="Formation React",
            description="Maîtriser React.",
            price="100000",
            publish_name="Codeshester"
        )

    def test_get_formations_list(self):
        url = reverse('api-formations')
        response = self.client.get(url)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(len(response.data), 1)

    def test_create_inscription(self):
        url = reverse('api-inscriptions')
        data = {
            'formation': self.formation.id,
            'nomComplet': 'Jane Doe',
            'tel_whatsapp': '+224622111111',
            'email': 'jane@example.com',
            'message': 'Je souhaite m\'inscrire.'
        }
        response = self.client.post(url, data)
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(InscriptionF.objects.count(), 1)

class InscriptionFModelTest(TestCase):
    def setUp(self):
        self.formation = Formation.objects.create(title="IT", description="Desc", price="1000", publish_name="Test")
        self.inscription = InscriptionF.objects.create(
            formation=self.formation,
            nomComplet="Student A",
            tel_whatsapp="+224600000000",
            email="student@example.com",
            message="Apply"
        )

    def test_inscription_creation(self):
        self.assertEqual(self.inscription.nomComplet, "Student A")
        self.assertEqual(self.inscription.formation.title, "IT")
