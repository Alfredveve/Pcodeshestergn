from django.contrib import admin
from . models import Formation, InscriptionF



class FormationAdmin(admin.ModelAdmin):
    list_display = ['title', 'description', 'price', 'certifier', 'publish_name', 'image']

admin.site.register(Formation, FormationAdmin)


class InscriptionfAdmin(admin.ModelAdmin):
    list_display = ['formation', 'nomComplet', 'email', 'tel_whatsapp', 'message']

admin.site.register( InscriptionF, InscriptionfAdmin)
