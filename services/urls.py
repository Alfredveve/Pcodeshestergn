from django.urls import path
from services.views import fListeService, fInscriService, fsuccesService


urlpatterns = [
    path('inscriService/<int:service_id>', fInscriService, name='inscriService'),
    path('pListeService/', fListeService, name='pListeService'),
    path('serviceSucces/', fsuccesService, name='serviceSucces'),
]
