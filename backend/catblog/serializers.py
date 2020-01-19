from rest_framework import serializers
from .models import CatBlog

class CatBlogSerializer(serializers.ModelSerializer):
    class Meta:
        model = CatBlog
        fields = ('id', 'title', 'description', 'completed')