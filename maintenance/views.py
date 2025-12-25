from django.views.generic import ListView, DetailView, CreateView
from django.urls import reverse_lazy
from django.shortcuts import get_object_or_404
from .models import MaintenanceCategory, MaintenanceService, MaintenanceRequest

class MaintenanceListView(ListView):
    model = MaintenanceCategory
    template_name = 'maintenance/maintenance_list.html'
    context_object_name = 'categories'

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['all_services'] = MaintenanceService.objects.filter(is_active=True)
        return context

class MaintenanceServiceDetailView(DetailView):
    model = MaintenanceService
    template_name = 'maintenance/maintenance_detail.html'
    context_object_name = 'service'

class MaintenanceRequestCreateView(CreateView):
    model = MaintenanceRequest
    fields = ['full_name', 'email', 'phone', 'equipment_model', 'problem_description']
    template_name = 'maintenance/maintenance_request_form.html'
    success_url = reverse_lazy('maintenance:request_success')

    def form_valid(self, form):
        service_id = self.kwargs.get('service_id')
        if service_id:
            form.instance.service = get_object_or_404(MaintenanceService, id=service_id)
        return super().form_valid(form)
