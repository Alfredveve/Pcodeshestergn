from django.db import models

class HomeSettings(models.Model):
    hero_title = models.CharField(max_length=200, default="Bienvenue chez Codeshestergn")
    hero_subtitle = models.TextField(default="Votre partenaire stratégique pour la maintenance informatique...")
    hero_image = models.ImageField(upload_to='home/hero/', blank=True, null=True)
    
    # Stats
    students_count = models.CharField(max_length=50, default="500+")
    satisfaction_rate = models.CharField(max_length=50, default="98%")
    years_expertise = models.CharField(max_length=50, default="10+")
    support_hours = models.CharField(max_length=50, default="24/7")

    class Meta:
        verbose_name = "Paramètres de l'accueil"
        verbose_name_plural = "Paramètres de l'accueil"

    def __str__(self):
        return "Paramètres Généraux"

class Partner(models.Model):
    name = models.CharField(max_length=100)
    logo = models.ImageField(upload_to='home/partners/')
    website = models.URLField(blank=True, null=True)

    def __str__(self):
        return self.name
