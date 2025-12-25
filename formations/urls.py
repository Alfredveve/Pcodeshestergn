from django.urls import path
from .views import FormationListView, FormationDetailView

urlpatterns = [
    path('pListeFormation/', FormationListView.as_view(), name='pListeFormation'),
    path('pDetailsFormation/<int:pk>/', FormationDetailView.as_view(), name='pDetailsFormation'),
]
