from django.core.management.base import BaseCommand
from maintenance.models import MaintenanceCategory, MaintenanceService

class Command(BaseCommand):
    help = 'Populate maintenance categories and services with initial data'

    def handle(self, *args, **kwargs):
        self.stdout.write(self.style.SUCCESS('Starting to populate maintenance data...'))

        # Créer les catégories
        printer_category, created = MaintenanceCategory.objects.get_or_create(
            name="Maintenance d'Imprimantes",
            defaults={
                'icon': 'fas fa-print',
                'description': 'Services professionnels de maintenance, réparation et entretien pour tous types d\'imprimantes (jet d\'encre, laser, multifonctions).'
            }
        )
        if created:
            self.stdout.write(self.style.SUCCESS(f'✓ Catégorie créée: {printer_category.name}'))

        computer_category, created = MaintenanceCategory.objects.get_or_create(
            name="Maintenance d'Ordinateurs",
            defaults={
                'icon': 'fas fa-laptop',
                'description': 'Maintenance complète de PC de bureau et portables : diagnostic, réparation matérielle, optimisation et nettoyage.'
            }
        )
        if created:
            self.stdout.write(self.style.SUCCESS(f'✓ Catégorie créée: {computer_category.name}'))

        network_category, created = MaintenanceCategory.objects.get_or_create(
            name="Maintenance Réseau & Serveurs",
            defaults={
                'icon': 'fas fa-network-wired',
                'description': 'Installation, configuration et maintenance de réseaux informatiques et serveurs d\'entreprise.'
            }
        )
        if created:
            self.stdout.write(self.style.SUCCESS(f'✓ Catégorie créée: {network_category.name}'))

        # Services pour Imprimantes
        printer_services = [
            {
                'title': 'Réparation d\'Imprimantes',
                'description': 'Diagnostic et réparation de tous types de pannes : bourrage papier, problèmes d\'impression, erreurs système. Intervention rapide sur site ou en atelier.',
                'price_start': '50,000',
            },
            {
                'title': 'Nettoyage et Entretien',
                'description': 'Nettoyage complet des têtes d\'impression, rouleaux et mécanismes internes. Prolonge la durée de vie de votre imprimante.',
                'price_start': '30,000',
            },
            {
                'title': 'Installation et Configuration',
                'description': 'Installation professionnelle de nouvelles imprimantes, configuration réseau, paramétrage des pilotes et formation utilisateur.',
                'price_start': '25,000',
            },
        ]

        for service_data in printer_services:
            service, created = MaintenanceService.objects.get_or_create(
                category=printer_category,
                title=service_data['title'],
                defaults={
                    'description': service_data['description'],
                    'price_start': service_data['price_start'],
                    'is_active': True
                }
            )
            if created:
                self.stdout.write(self.style.SUCCESS(f'  ✓ Service créé: {service.title}'))

        # Services pour Ordinateurs
        computer_services = [
            {
                'title': 'Diagnostic Complet',
                'description': 'Analyse approfondie de votre PC : performance, virus, erreurs système, état du matériel. Rapport détaillé fourni.',
                'price_start': '40,000',
            },
            {
                'title': 'Réparation Matérielle',
                'description': 'Remplacement de composants défectueux : disque dur, RAM, carte mère, écran. Pièces de qualité garanties.',
                'price_start': '80,000',
            },
            {
                'title': 'Nettoyage et Optimisation',
                'description': 'Nettoyage physique complet, suppression des virus, optimisation du système, mise à jour des pilotes.',
                'price_start': '35,000',
            },
            {
                'title': 'Upgrade et Amélioration',
                'description': 'Mise à niveau de votre PC : ajout de RAM, installation SSD, amélioration des performances.',
                'price_start': '60,000',
            },
        ]

        for service_data in computer_services:
            service, created = MaintenanceService.objects.get_or_create(
                category=computer_category,
                title=service_data['title'],
                defaults={
                    'description': service_data['description'],
                    'price_start': service_data['price_start'],
                    'is_active': True
                }
            )
            if created:
                self.stdout.write(self.style.SUCCESS(f'  ✓ Service créé: {service.title}'))

        # Services pour Réseau
        network_services = [
            {
                'title': 'Installation Réseau',
                'description': 'Mise en place de réseaux câblés et Wi-Fi pour entreprises. Configuration routeurs, switches et points d\'accès.',
                'price_start': '150,000',
            },
            {
                'title': 'Maintenance Serveurs',
                'description': 'Entretien préventif et correctif de serveurs : mise à jour, sauvegarde, surveillance, sécurité.',
                'price_start': '200,000',
            },
        ]

        for service_data in network_services:
            service, created = MaintenanceService.objects.get_or_create(
                category=network_category,
                title=service_data['title'],
                defaults={
                    'description': service_data['description'],
                    'price_start': service_data['price_start'],
                    'is_active': True
                }
            )
            if created:
                self.stdout.write(self.style.SUCCESS(f'  ✓ Service créé: {service.title}'))

        self.stdout.write(self.style.SUCCESS('\n✅ Données de maintenance ajoutées avec succès!'))
        self.stdout.write(self.style.WARNING('\n💡 Vous pouvez maintenant ajouter des images via l\'interface d\'administration Django.'))
