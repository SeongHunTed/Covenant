from django.db import models
from accounts.models import User

# Create your models here.

class Cell(models.Model):
    cell = models.IntegerField(User.cell)