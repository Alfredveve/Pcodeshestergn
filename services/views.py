from django.urls import reverse_lazy
from django.views.generic import ListView, CreateView, TemplateView
from django.shortcuts import get_object_or_404
from .models import Service, ContactService
from .forms import InscriServiceForm

class ServiceListView(ListView):
    model = Service
    template_name = 'service/pListeService.html'
    context_object_name = 'services'

class ServiceInscriptionView(CreateView):
    model = ContactService
    form_class = InscriServiceForm
    template_name = 'service/inscriService.html'
    success_url = reverse_lazy('serviceSucces')

    def get_initial(self):
        initial = super().get_initial()
        service_id = self.kwargs.get('service_id')
        if service_id:
            service = get_object_or_404(Service, id=service_id)
            initial['service'] = service
        return initial

class ServiceSuccessView(TemplateView):
    template_name = 'service/serviceSucces.html'

  