from django.db import models

# Create your models here.

from django.db import models
from django.contrib.auth.models import BaseUserManager, AbstractBaseUser


class Account(BaseUserManager):
    
    def create_user(self, id, name, cell, digit, birth, password=None):
        if not id:
            raise ValueError("User must have Value")
        user = self.model(
            id = id,
            name = name,
            cell = cell,
            digit = digit,
            birth = birth,
        )
        user.set_password(password)
        user.save(using=self._db)

        return user

    def create_superuser(self, id, name, cell, digit, birth, password):
        user = self.create_user(
            id = id,
            name = name,
            cell = cell,
            password = password,
            digit = digit,
            birth = birth,
        )
        user.is_admin = True
        user.is_leader = True
        user.is_superuser = True
        user.save(using=self._db)

        return user

class User(AbstractBaseUser):
    
    # 필수기재사항
    id              = models.CharField(max_length=20, unique=True, primary_key=True)
    name            = models.CharField(max_length=20)
    cell            = models.IntegerField()
    digit           = models.CharField(max_length=11)
    
    # 자동기재사항
    is_admin        = models.BooleanField(default=False)
    is_active       = models.BooleanField(default=True)
    is_staff        = models.BooleanField(default=False)
    is_superuser    = models.BooleanField(default=False)
    create_at       = models.DateTimeField(verbose_name='date joined', auto_now_add=True)
    last_login      = models.DateTimeField(verbose_name='last login', auto_now=True)
    
    # NULL 값 허용 필드
    birth           = models.DateField(verbose_name="생년월일", null=True, blank=True)
    kakao_id        = models.CharField(max_length=100, null=True, blank=True)

    object = Account()

    USERNAME_FIELD = 'id'
    REQUIRED_FIELDS = ['name', 'digit', 'cell', 'birth']

    def __str__(self):
        return self.email
    
    def has_perm(self, perm, obj=None):
        return self.is_admin

    def has_module_perms(self, app_label):
        return True

