from django.db import models
from django_countries.fields import CountryField
from phonenumber_field.modelfields import PhoneNumberField




class Service(models.Model):
    title = models.CharField(max_length=100)
    description = models.TextField()
    price = models.CharField(max_length=9)
    image = models.ImageField(upload_to='services/images', blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    publish_name = models.CharField(max_length=200)
    
    
    def __str__(self):
        return self.title


class ContactService(models.Model):
    service = models.ForeignKey('Service', on_delete=models.CASCADE)
    nomComplet = models.CharField(max_length=300, blank=False, null=False)
    pays = CountryField()
    ville = models.CharField(max_length=200, blank=False, null=False)
    tel_whatsapp = models.CharField(max_length=20, blank=False, null=False)
    email = models.EmailField(blank=False, null=False)
    message = models.TextField(blank=False, null=False)
    created_at = models.DateField(auto_now_add=True)



