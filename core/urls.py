from django.urls import path
from .views import home, producto, tienda_producto, ficha_producto,nosotros,contacto,registrarse,ingresar

urlpatterns = [
    path('', home, name="home"),
    path('producto/<action>/<id_producto>',producto, name="producto"),
    path('tienda_producto',tienda_producto, name="tienda_producto"),
    path('ficha_producto/<id_producto>',ficha_producto,name="ficha_producto"),
    path('nosotros', nosotros, name="nosotros"),
    path('contacto', contacto, name="contacto"),
    path('registrarse', registrarse, name="registrarse"),
    path('ingresar', ingresar, name="ingresar"),

]
