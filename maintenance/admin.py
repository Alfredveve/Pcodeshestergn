from django.contrib import admin
from .models import MaintenanceCategory, MaintenanceService, MaintenanceRequest

@admin.register(MaintenanceCategory)
class MaintenanceCategoryAdmin(admin.ModelAdmin):
    list_display = ('name', 'icon')
    search_fields = ('name',)

@admin.register(MaintenanceService)
class MaintenanceServiceAdmin(admin.ModelAdmin):
    list_display = ('title', 'category', 'price_start', 'is_active')
    list_filter = ('category', 'is_active')
    search_fields = ('title', 'description')

@admin.register(MaintenanceRequest)
class MaintenanceRequestAdmin(admin.ModelAdmin):
    list_display = ('full_name', 'equipment_model', 'status', 'created_at')
    list_filter = ('status', 'created_at')
    search_fields = ('full_name', 'equipment_model', 'email', 'phone')
    readonly_fields = ('created_at',)
