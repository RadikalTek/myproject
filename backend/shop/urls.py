from django.urls import path
from . import views

urlpatterns = [
    path('products/', views.products),
    path('product1/', views.product1),
    path('product2/', views.product2),
    path('product3/', views.product3),
    path('product4/', views.product4),
    path('product5/', views.product5),
    path('product6/', views.product6),
]