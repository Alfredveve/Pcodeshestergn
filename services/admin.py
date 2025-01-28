from django.contrib import admin
from . models import Service, ContactService



class ServicesAdmin(admin.ModelAdmin):
    list_display = ['title', 'description', 'price', 'publish_name', 'image']

admin.site.register(Service, ServicesAdmin)



class ContacServiceAdmin(admin.ModelAdmin):
    list_display = ['service', 'nomComplet', 'pays', 'ville', 'tel_whatsapp', 'email', 'message']


admin.site.register(ContactService, ContacServiceAdmin)
