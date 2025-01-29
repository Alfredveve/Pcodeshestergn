from django.urls import path
from services.views import fListeService, fInscriService, fsuccesService


urlpatterns = [
    path('serviceSucces/<int:service_id>/', fsuccesService, name='serviceSucces'),
    path('inscriService/', fInscriService, name='inscriService'),
    path('pListeService/', fListeService, name='pListeService'),
]
