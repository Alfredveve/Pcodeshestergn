from django.shortcuts import render



def fhome(request):
    return render(request, 'home/phome.html')
