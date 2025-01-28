from django.db import models




class Formation(models.Model):
    title = models.CharField(max_length=100)
    image = models.ImageField(upload_to='formations/image', blank=True)
    description = models.TextField()
    certifier = models.BooleanField(default=False)
    price = models.CharField(max_length=9)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    publish_name = models.CharField(max_length=200)
    
    
    def __str__(self):
        return self.title

class InscriptionF(models.Model):
    formation = models.ForeignKey('Formation', on_delete=models.CASCADE)
    nomComplet = models.CharField(max_length=300)
    tel_whatsapp = models.CharField(max_length=20)
    email = models.EmailField()
    message = models.TextField()
    date = models.DateField(auto_now_add=True)

