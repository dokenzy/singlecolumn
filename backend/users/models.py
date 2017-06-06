from django.db import models
from django.contrib.auth.models import AbstractUser
from django.utils.translation import ugettext_lazy as _


class User(AbstractUser):
    github_id = models.CharField(_('Github ID'), max_length=50, null=True, blank=True)
