# -*- coding: utf-8 -*-

from django.contrib.auth import get_user_model

from rest_framework.generics import RetrieveAPIView
from rest_framework.authentication import TokenAuthentication

from .serializers import UserProfileSerializer

User = get_user_model()


class UserProfileView(RetrieveAPIView):
    authentication_classes = (TokenAuthentication,)
    serializer_class = UserProfileSerializer
    queryset = User.objects.all()
    lookup_field = 'username'
