from django.shortcuts import render, redirect
from . models import Service
from . forms import InscriServiceForm


def fListeService(request):
    service = Service.objects.all()
    context = {
        'services' : service
    }
    return render(request, 'service/pListeService.html', context)

# La fonction inscription à un service

def fInscriService(request):
    form = InscriServiceForm(request.POST or None, request.FILES or None)
    messages = ''
    if request.method == 'POST' and form.is_valid():
        form.save()
        return redirect('serviceSucces')
    else:
        return render (request, 'service/inscriService.html', {'form': form, 'message': messages})
    
    
    
def fsuccesService(request):
    return render(request, 'service/serviceSucces.html')