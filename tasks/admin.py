from django.contrib import admin
# import my models
from .models import Task

# Register your models here.
admin.site.register(Task)
