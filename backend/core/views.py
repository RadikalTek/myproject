from django.shortcuts import render



def aboutus(request):
    return render(request, 'aboutus.html')


def contactus(request):
    return render(request, 'contactus.html')