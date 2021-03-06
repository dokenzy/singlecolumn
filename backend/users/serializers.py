# -*- coding: utf-8 -*-

from django.contrib.auth import get_user_model

from rest_framework.serializers import ModelSerializer

User = get_user_model()


class UserProfileSerializer(ModelSerializer):
    class Meta:
        model = User
        fields = (
            'username',
        )
