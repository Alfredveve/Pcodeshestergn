from django.views.generic import ListView, DetailView
from .models import Formation

class FormationListView(ListView):
    model = Formation
    template_name = 'formation/pListeFormation.html'
    context_object_name = 'formations'

class FormationDetailView(DetailView):
    model = Formation
    template_name = 'formation/pDetailsFormation.html'
    context_object_name = 'formation'
