from django.shortcuts import render



def products(request):
    return render(request, 'products.html')

def product1(request):
    return render(request, 'single_product_page/product1.html')

def product2(request):
    return render(request, 'single_product_page/product2.html')

def product3(request):
    return render(request, 'single_product_page/product3.html')

def product4(request):
    return render(request, 'single_product_page/product4.html')

def product5(request):
    return render(request, 'single_product_page/product5.html')

def product6(request):
    return render(request, 'single_product_page/product6.html')
