from django.urls import path
from django.views.generic import TemplateView
from . import views

app_name = 'maintenance'

urlpatterns = [
    path('', views.MaintenanceListView.as_view(), name='list'),
    path('service/<int:pk>/', views.MaintenanceServiceDetailView.as_view(), name='detail'),
    path('request/<int:service_id>/', views.MaintenanceRequestCreateView.as_view(), name='request'),
    path('success/', TemplateView.as_view(template_name='maintenance/maintenance_success.html'), name='request_success'),
]
