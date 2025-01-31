from django import forms
from .models import Service, ContactService



class FormService(forms.ModelForm):
    class Meta:
        model = Service
        fields = ['title', 'description', 'price', 'publish_name', 'image']
        
        

class InscriServiceForm(forms.ModelForm):
    class Meta:
        model = ContactService
        fields = ['service', 'nomComplet', 'pays', 'ville', 'tel_whatsapp', 'email', 'message']


    def __init__(self, *args, **kwargs):
        super(InscriServiceForm, self).__init__(*args, **kwargs)
        # Rendre tous les champs obligatoires
        for field in self.fields:
            self.fields[field].required = True



