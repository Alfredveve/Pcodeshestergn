from rest_framework import viewsets, generics
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import HomeSettings, Partner, ContactMessage
from services.models import Service
from formations.models import Formation, InscriptionF
from maintenance.models import MaintenanceCategory, MaintenanceService, MaintenanceRequest
from .serializers import (
    HomeSettingsSerializer, PartnerSerializer, ContactMessageSerializer,
    ServiceSerializer, FormationSerializer, InscriptionFSerializer,
    MaintenanceCategorySerializer, MaintenanceServiceSerializer,
    MaintenanceRequestSerializer
)

class HomeSettingsView(generics.RetrieveAPIView):
    queryset = HomeSettings.objects.all()
    serializer_class = HomeSettingsSerializer

    def get_object(self):
        return HomeSettings.objects.first()

class PartnerListView(generics.ListAPIView):
    queryset = Partner.objects.all()
    serializer_class = PartnerSerializer

class ContactMessageCreateView(generics.CreateAPIView):
    queryset = ContactMessage.objects.all()
    serializer_class = ContactMessageSerializer

class ServiceListView(generics.ListAPIView):
    queryset = Service.objects.all()
    serializer_class = ServiceSerializer

class ServiceDetailView(generics.RetrieveAPIView):
    queryset = Service.objects.all()
    serializer_class = ServiceSerializer

class FormationListView(generics.ListAPIView):
    queryset = Formation.objects.all()
    serializer_class = FormationSerializer

class FormationDetailView(generics.RetrieveAPIView):
    queryset = Formation.objects.all()
    serializer_class = FormationSerializer

class InscriptionFCreateView(generics.CreateAPIView):
    queryset = InscriptionF.objects.all()
    serializer_class = InscriptionFSerializer

class MaintenanceCategoryListView(generics.ListAPIView):
    queryset = MaintenanceCategory.objects.all()
    serializer_class = MaintenanceCategorySerializer

class MaintenanceCategoryDetailView(generics.RetrieveAPIView):
    queryset = MaintenanceCategory.objects.all()
    serializer_class = MaintenanceCategorySerializer

class MaintenanceRequestCreateView(generics.CreateAPIView):
    queryset = MaintenanceRequest.objects.all()
    serializer_class = MaintenanceRequestSerializer

@api_view(['GET'])
def global_data(request):
    """
    Endpoint to get all necessary data for the homepage in one request.
    """
    settings = HomeSettings.objects.first()
    partners = Partner.objects.all()
    services = Service.objects.all()[:4]
    formations = Formation.objects.all()[:4]
    maintenance_categories = MaintenanceCategory.objects.all()

    return Response({
        'settings': HomeSettingsSerializer(settings, context={'request': request}).data if settings else None,
        'partners': PartnerSerializer(partners, many=True, context={'request': request}).data,
        'services': ServiceSerializer(services, many=True, context={'request': request}).data,
        'formations': FormationSerializer(formations, many=True, context={'request': request}).data,
        'maintenance_categories': MaintenanceCategorySerializer(maintenance_categories, many=True, context={'request': request}).data,
    })
