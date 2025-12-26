from django.views.generic import TemplateView
from django.views import View
from django.shortcuts import render, redirect
from django.contrib import messages
from services.models import Service
from formations.models import Formation
from maintenance.models import MaintenanceCategory, MaintenanceService
from .models import HomeSettings, Partner, ContactMessage

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

class ContactView(View):
    template_name = 'home/contact.html'
    
    def get(self, request):
        return render(request, self.template_name)
    
    def post(self, request):
        from django.core.mail import send_mail
        from django.conf import settings
        
        # Récupérer les données du formulaire
        name = request.POST.get('name')
        email = request.POST.get('email')
        subject = request.POST.get('subject')
        message = request.POST.get('message')
        
        # Créer et sauvegarder le message
        ContactMessage.objects.create(
            name=name,
            email=email,
            subject=subject,
            message=message
        )
        
        # Envoyer un email de notification
        try:
            email_subject = f"Nouveau message de contact - {subject}"
            email_message = f"""
Nouveau message reçu via le formulaire de contact :

Nom: {name}
Email: {email}
Sujet: {subject}

Message:
{message}

---
Ce message a été envoyé depuis le formulaire de contact de Codeshestergn.
            """
            
            send_mail(
                email_subject,
                email_message,
                settings.DEFAULT_FROM_EMAIL,
                [settings.CONTACT_EMAIL],
                fail_silently=True,  # Ne pas bloquer si l'email échoue
            )
        except Exception as e:
            # Log l'erreur mais continue le processus
            print(f"Erreur lors de l'envoi de l'email: {e}")
        
        # Ajouter un message de succès
        messages.success(request, 'Votre message a été envoyé avec succès ! Nous vous répondrons dans les plus brefs délais.')
        
        # Rediriger vers la page de contact
        return redirect('contact')


