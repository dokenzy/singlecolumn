from rest_framework.generics import ListAPIView, RetrieveAPIView
from rest_framework.permissions import AllowAny

from .models import Post
from .serializers import PostListSerializer


class PostDetailView(RetrieveAPIView):
    permission_classes = (AllowAny,)
    serializer_class = PostListSerializer
    queryset = Post.objects.all()


class PostListView(ListAPIView):
    permission_classes = (AllowAny,)
    serializer_class = PostListSerializer
    queryset = Post.objects.all()
