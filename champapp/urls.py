from . import views
from django.urls import path

urlpatterns = {
    path('',views.index,name="index"),  
    path('api/standings/',views.proxy_to_external_api,name='proxy_to_external_api'),
}