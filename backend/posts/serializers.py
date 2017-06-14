from rest_framework.serializers import (
    ModelSerializer,
    SerializerMethodField,
)

from .models import Post


class PostSerializer(ModelSerializer):
    user = SerializerMethodField()

    class Meta:
        model = Post()
        fields = (
            'id',
            'title',
            'content',
            'user',
            'created_at',
            'updated_at',
        )

    def get_user(self, obj):
        return str(obj.user)
