from django.db import models
from django.urls import reverse

class MaintenanceCategory(models.Model):
    name = models.CharField(max_length=100, verbose_name="Nom de la catégorie")
    icon = models.CharField(max_length=50, help_text="Classe FontAwesome (ex: fas fa-laptop)", verbose_name="Icône")
    description = models.TextField(verbose_name="Description de la catégorie")
    image = models.ImageField(upload_to='maintenance/categories/', blank=True, null=True, verbose_name="Image d'illustration")

    class Meta:
        verbose_name = "Catégorie de maintenance"
        verbose_name_plural = "Catégories de maintenance"

    def __str__(self):
        return self.name

class MaintenanceService(models.Model):
    category = models.ForeignKey(MaintenanceCategory, on_delete=models.CASCADE, related_name='services', verbose_name="Catégorie")
    title = models.CharField(max_length=200, verbose_name="Titre du service")
    description = models.TextField(verbose_name="Description détaillée")
    price_start = models.CharField(max_length=50, verbose_name="Prix à partir de")
    image = models.ImageField(upload_to='maintenance/services/', blank=True, null=True, verbose_name="Image du service")
    is_active = models.BooleanField(default=True, verbose_name="Actif")
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        verbose_name = "Service de maintenance"
        verbose_name_plural = "Services de maintenance"

    def __str__(self):
        return f"{self.title} ({self.category.name})"

class MaintenanceRequest(models.Model):
    service = models.ForeignKey(MaintenanceService, on_delete=models.SET_NULL, null=True, verbose_name="Service demandé")
    full_name = models.CharField(max_length=255, verbose_name="Nom complet")
    email = models.EmailField(verbose_name="Email")
    phone = models.CharField(max_length=20, verbose_name="Téléphone/WhatsApp")
    equipment_model = models.CharField(max_length=200, verbose_name="Modèle de l'équipement", help_text="Ex: Epson L3110, Dell XPS 15")
    problem_description = models.TextField(verbose_name="Description du problème")
    created_at = models.DateTimeField(auto_now_add=True)
    status = models.CharField(max_length=20, choices=[
        ('pending', 'En attente'),
        ('in_progress', 'En cours'),
        ('completed', 'Terminé'),
        ('cancelled', 'Annulé'),
    ], default='pending', verbose_name="Statut")

    class Meta:
        verbose_name = "Demande de maintenance"
        verbose_name_plural = "Demandes de maintenance"

    def __str__(self):
        return f"Demande de {self.full_name} - {self.equipment_model}"
