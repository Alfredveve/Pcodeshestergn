from django.contrib import admin
from .models import HomeSettings, Partner

@admin.register(HomeSettings)
class HomeSettingsAdmin(admin.ModelAdmin):
    def has_add_permission(self, request):
        # Prevent adding more than one settings entry
        if self.model.objects.count() >= 1:
            return False
        return super().has_add_permission(request)

@admin.register(Partner)
class PartnerAdmin(admin.ModelAdmin):
    list_display = ('name', 'website')
