from rest_framework import serializers
from .models import HomeSettings, Partner, ContactMessage
from services.models import Service
from formations.models import Formation, InscriptionF
from maintenance.models import MaintenanceCategory, MaintenanceService, MaintenanceRequest

class HomeSettingsSerializer(serializers.ModelSerializer):
    hero_image = serializers.ImageField(max_length=None, use_url=True, allow_null=True, required=False)
    
    class Meta:
        model = HomeSettings
        fields = '__all__'

class PartnerSerializer(serializers.ModelSerializer):
    logo = serializers.ImageField(max_length=None, use_url=True, allow_null=True, required=False)

    class Meta:
        model = Partner
        fields = '__all__'

class ContactMessageSerializer(serializers.ModelSerializer):
    class Meta:
        model = ContactMessage
        fields = '__all__'

class ServiceSerializer(serializers.ModelSerializer):
    image = serializers.ImageField(max_length=None, use_url=True, allow_null=True, required=False)

    class Meta:
        model = Service
        fields = '__all__'

class FormationSerializer(serializers.ModelSerializer):
    image = serializers.ImageField(max_length=None, use_url=True, allow_null=True, required=False)

    class Meta:
        model = Formation
        fields = '__all__'

class InscriptionFSerializer(serializers.ModelSerializer):
    class Meta:
        model = InscriptionF
        fields = '__all__'

class MaintenanceServiceSerializer(serializers.ModelSerializer):
    image = serializers.ImageField(max_length=None, use_url=True, allow_null=True, required=False)

    class Meta:
        model = MaintenanceService
        fields = '__all__'

class MaintenanceCategorySerializer(serializers.ModelSerializer):
    image = serializers.ImageField(max_length=None, use_url=True, allow_null=True, required=False)
    icon = serializers.CharField(required=False) # Keep icon as char
    services = MaintenanceServiceSerializer(many=True, read_only=True)
    class Meta:
        model = MaintenanceCategory
        fields = '__all__'

class MaintenanceRequestSerializer(serializers.ModelSerializer):
    class Meta:
        model = MaintenanceRequest
        fields = '__all__'
