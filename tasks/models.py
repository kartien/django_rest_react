from django.db import models

# Create your models here.

class Task(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField(blank=True)
    #phone = models.TextField(max_length=10)
    done = models.BooleanField(default=False)
    
    def __str__(self) -> str:
        return self.title
    
    
    