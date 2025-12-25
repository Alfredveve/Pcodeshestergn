from django.urls import path
from .views import ServiceListView, ServiceInscriptionView, ServiceSuccessView

urlpatterns = [
    path('pListeService/', ServiceListView.as_view(), name='pListeService'),
    path('inscriService/<int:service_id>/', ServiceInscriptionView.as_view(), name='inscriService'),
    path('serviceSucces/', ServiceSuccessView.as_view(), name='serviceSucces'),
]
