from django.views.generic import TemplateView
from services.models import Service
from formations.models import Formation
from maintenance.models import MaintenanceCategory, MaintenanceService
from .models import HomeSettings, Partner

class HomeView(TemplateView):
    template_name = 'home/phome.html'

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['services'] = Service.objects.all()[:4]
        context['formations'] = Formation.objects.all()[:4]
        context['maintenance_categories'] = MaintenanceCategory.objects.all()
        context['settings'] = HomeSettings.objects.first()
        context['partners'] = Partner.objects.all()
        return context
class AboutView(TemplateView):
    template_name = 'home/about.html'

class TermsView(TemplateView):
    template_name = 'home/terms.html'

class LegalView(TemplateView):
    template_name = 'home/legal.html'

class PrivacyView(TemplateView):
    template_name = 'home/privacy.html'

class ContactView(TemplateView):
    template_name = 'home/contact.html'
