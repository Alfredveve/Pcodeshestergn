from django.shortcuts import get_object_or_404, render, redirect
from . models import Service
from django.contrib import messages
from . forms import InscriServiceForm


def fListeService(request):
    service = Service.objects.all()
    context = {
        'services' : service
    }
    return render(request, 'service/pListeService.html', context)

"""
# La fonction inscription à un service

def fInscriService(request):
    form = InscriServiceForm(request.POST or None, request.FILES or None)
    messages = ''
    if request.method == 'POST' and form.is_valid():
        form.save()
        return redirect('serviceSucces')
    else:
        return render (request, 'service/inscriService.html', {'form': form, 'message': messages})
    
    
    """
    
def fsuccesService(request):
    return render(request, 'service/serviceSucces.html')




"""
def fInscriService(request, service_id=None):
    # Récupérer le service sélectionné (si l'ID est passé en paramètre)
    service = None
    if service_id:
        service = get_object_or_404(Service, id=service_id)

    # Initialiser le formulaire avec le service pré-sélectionné
    form = InscriServiceForm(request.POST or None, request.FILES or None, initial={'service': service} if service else None)

    if request.method == 'POST':
        if form.is_valid():
            # Enregistrer l'inscription
            inscription = form.save(commit=False)
            if service:
                inscription.service = service  # Lier l'inscription au service sélectionné
            inscription.save()
            return redirect('serviceSucces')  # Redirection vers la page de succès
        else:
            # Afficher les erreurs de formulaire
            messages.error(request, 'Erreur lors de l\'inscription. Veuillez vérifier les champs.')
    
    return render(request, 'service/inscriService.html', {'form': form})





def fInscriService(request, service_id=None):
    # Récupérer le service sélectionné (si l'ID est passé en paramètre)
    service = None
    if service_id:
        service = get_object_or_404(Service, id=service_id)

    # Initialiser le formulaire avec le service pré-sélectionné
    form = InscriServiceForm(request.POST or None, initial={'service': service} if service else None)

    if request.method == 'POST':
        if form.is_valid():
            # Enregistrer l'inscription
            inscription = form.save(commit=False)
            if service:
                inscription.service = service  # Lier l'inscription au service sélectionné
            inscription.save()
            return redirect('serviceSucces')  # Redirection vers la page de succès
        else:
            # Afficher les erreurs de formulaire
            messages.error(request, 'Erreur lors de l\'inscription. Veuillez vérifier les champs.')
            # Ajouter des logs pour déboguer les erreurs
            print(form.errors)  # Afficher les erreurs dans la console pour déboguer
    
    return render(request, 'service/inscriService.html', {'form': form})

    
    """
    
# views.py
def fInscriService(request, service_id=None):
    service = get_object_or_404(Service, id=service_id)
    
    if request.method == 'POST':
        form = InscriServiceForm(request.POST)
        if form.is_valid():
            inscription = form.save(commit=False)
            inscription.service = service
            inscription.save()
            return redirect('serviceSucces')
        else:
            messages.error(request, 'Erreur lors de l\'inscription. Veuillez vérifier les champs.')
            print(form.errors)
    else:
        form = InscriServiceForm(initial={'service': service})
    
    return render(request, 'service/inscriService.html', {'form': form, 'service': service})