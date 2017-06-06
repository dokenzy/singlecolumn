# -*- coding: utf-8 -*-

from django.conf.urls import url

from . import views


urlpatterns = [
    url(
        regex=r'(?P<username>[\w.@+-]+)/profile/$',
        view=views.UserProfileView.as_view(),
        name='profile',
    ),
]
