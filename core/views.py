from django.shortcuts import redirect,render, get_object_or_404
from .models import Producto, Categoria
from .forms import ProductoForm
from .models import Producto
from django.contrib import messages, auth
from django.contrib.auth.decorators import login_required


def home(request):
    return render(request, "core/home.html")

def tienda_producto(request):
    data = {"list": Producto.objects.all().order_by('id_producto')}
    return render(request, "core/tienda_producto.html",data)

def ficha_producto(request, id_producto):
    producto = Producto.objects.get(id_producto=id_producto)
    data = {"producto":producto}
    return render(request,"core/ficha_producto.html",data)

def nosotros(request):
    return render(request, "core/nosotros.html")

def contacto(request):
    return render(request, "core/contacto.html")

def registrarse(request):
    return render(request, "core/registrarse.html")

def ingresar(request):
    return render(request, "core/ingresar.html")

def ingresar(request):
    if request.method == 'POST':
        username = request.POST['username']
        password = request.POST['password']
        user = auth.authenticate(username=username, password=password)

        if user is not None and user.is_superuser:
            auth.login(request, user)
            return redirect('home')
        else:
            messages.error(request, 'Credenciales incorrectas')
    return render(request, 'core/ingresar.html')

def producto(request, action, id_producto):
    data = {"mesg": "", "form": ProductoForm(), "action": action, "id_producto": id_producto}
    
    if action == 'ins':
        if request.method == "POST":
            form = ProductoForm(request.POST, request.FILES)
            if form.is_valid():
                try:
                    form.save()
                    data["mesg"] = "El producto se agregó correctamente"
                except Exception as e:
                    data["mesg"] = f"Error al agregar el producto: {e}"
        else:
            data["form"] = ProductoForm()
    
    elif action == 'upd':
        objeto = get_object_or_404(Producto, id_producto=id_producto)
        if request.method == "POST":
            form = ProductoForm(request.POST, request.FILES, instance=objeto)
            if form.is_valid():
                form.save()
                data["mesg"] = "Producto actualizado"
        else:
            form = ProductoForm(instance=objeto)
        form.fields['id_producto'].widget.attrs['readonly'] = True
        data["form"] = form
        
    elif action == 'del':
        try:
            producto = get_object_or_404(Producto, id_producto=id_producto)
            producto.delete()
            data["mesg"] = "Producto eliminado"
            return redirect(producto, action='ins', id_producto='-1')
        except Exception as e:
            data["mesg"] = f"Producto no encontrado: {e}"
    
    data["list"] = Producto.objects.all().order_by('id_producto')
    return render(request, "core/producto.html", data)
