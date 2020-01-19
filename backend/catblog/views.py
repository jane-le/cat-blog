from django.shortcuts import render
from rest_framework import viewsets
from .serializers import CatBlogSerializer
from .models import CatBlog

class CatBlogView(viewsets.ModelViewSet):
    serializer_class = CatBlogSerializer
    queryset = CatBlog.objects.all()