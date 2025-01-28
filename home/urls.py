from django.urls import path
from home.views import fhome


urlpatterns = [
    path('', fhome, name='phome'),
]
