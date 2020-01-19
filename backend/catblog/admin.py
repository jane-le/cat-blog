from django.contrib import admin
from .models import CatBlog

class CatBlogAdmin(admin.ModelAdmin): 
    list_display = ('title', 'description', 'completed')

# Register your models here.
admin.site.register(CatBlog, CatBlogAdmin)


