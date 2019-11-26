from django.db import models

# Create your models here.
class TodoModel(models.Model):
    # id is set automatically so no need to add myself
    name = models.CharField(max_length=180)
    done = models.BooleanField(default=False)
