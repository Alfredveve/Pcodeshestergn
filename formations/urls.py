from django.urls import path
from formations.views import fListeFormation

urlpatterns = [
    path('pListeFormation/', fListeFormation, name='pListeFormation')
]
