from django import forms
from django.forms import ModelForm
from .models import Producto

class ProductoForm(ModelForm):
    class Meta:
        model = Producto
        fields = '__all__'
        
    def __init__(self, *args, **kwargs):
        super(ProductoForm, self).__init__(*args, **kwargs)
        if self.instance and self.instance.pk:
            self.fields['id_producto'].widget.attrs['readonly'] = True
