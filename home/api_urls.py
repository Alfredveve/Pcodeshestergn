from django.urls import path
from . import api_views

urlpatterns = [
    path('', api_views.api_root, name='api-home-root'),
    path('home-settings/', api_views.HomeSettingsView.as_view(), name='api-home-settings'),
    path('partners/', api_views.PartnerListView.as_view(), name='api-partners'),
    path('contact/', api_views.ContactMessageCreateView.as_view(), name='api-contact'),
    path('services/', api_views.ServiceListView.as_view(), name='api-services'),
    path('services/<int:pk>/', api_views.ServiceDetailView.as_view(), name='api-service-detail'),
    path('formations/', api_views.FormationListView.as_view(), name='api-formations'),
    path('formations/<int:pk>/', api_views.FormationDetailView.as_view(), name='api-formation-detail'),
    path('inscriptions/', api_views.InscriptionFCreateView.as_view(), name='api-inscriptions'),
    path('maintenance-categories/', api_views.MaintenanceCategoryListView.as_view(), name='api-maintenance-categories'),
    path('maintenance-categories/<int:pk>/', api_views.MaintenanceCategoryDetailView.as_view(), name='api-maintenance-category-detail'),
    path('maintenance-request/', api_views.MaintenanceRequestCreateView.as_view(), name='api-maintenance-request'),
    path('global-data/', api_views.global_data, name='api-global-data'),
]

