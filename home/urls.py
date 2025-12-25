from django.urls import path
from home.views import HomeView, AboutView, TermsView, LegalView, PrivacyView, ContactView


urlpatterns = [
    path('', HomeView.as_view(), name='phome'),
    path('a-propos/', AboutView.as_view(), name='about'),
    path('conditions-utilisation/', TermsView.as_view(), name='terms'),
    path('mentions-legales/', LegalView.as_view(), name='legal'),
    path('confidentialite/', PrivacyView.as_view(), name='privacy'),
    path('contact/', ContactView.as_view(), name='contact'),
]
