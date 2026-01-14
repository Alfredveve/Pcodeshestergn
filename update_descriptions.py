
import os
import django

os.environ.setdefault("DJANGO_SETTINGS_MODULE", "Pcodeshestergn.settings")
django.setup()

from services.models import Service
from formations.models import Formation
from maintenance.models import MaintenanceService

# --- Services Descriptions ---
services_updates = {
    1: "Service complet de maintenance pour imprimantes Epson L3250. Inclut le nettoyage des têtes, l'alignement, la vérification des niveaux d'encre et la résolution des bourrages papier pour assurer une qualité d'impression optimale.",
    3: "Réparation experte de votre matériel Epson. Diagnostic précis, remplacement de pièces défectueuses par des composants d'origine et tests rigoureux pour garantir la longévité de votre équipement.",
    4: "Stratégie et design web optimisés. Nous vous accompagnons dans la création de visuels percutants et l'intégration de solutions web pour améliorer votre visibilité et votre image de marque en ligne.",
    5: "Développement web sur mesure pour concrétiser vos projets. Création de sites vitrines, e-commerce et applications web performantes, sécurisées et adaptées à tous les écrans (responsive design).",
    6: "Service professionnel de réparation et entretien pour tous types d'imprimantes (Laser, Jet d'encre, 3D). Nous intervenons sur les pannes mécaniques et électroniques pour rétablir vos flux d'impression.",
    7: "Prise de vue professionnelle pour vos documents officiels. Photos d'identité conformes aux normes pour passeports, visas, permis de conduire et cartes d'identité, réalisées en quelques minutes.",
    8: "Expertise certifiée pour la remise en état de vos imprimantes Epson (L-series, Workforce, EcoTank). Utilisation exclusive de pièces d'origine garanties pour une fiabilité retrouvée."
}

# --- Formations Descriptions ---
formations_updates = {
    1: "Maîtrisez le développement web avec Django, le framework Python de référence. Apprenez à concevoir des applications robustes, de la gestion de base de données à l'interface utilisateur, en passant par la sécurité.",
    2: "Formation certifiante CEH v13 (Certified Ethical Hacker). Acquérez les compétences offensives pour tester et sécuriser les systèmes informatiques contre les cybermenaces modernes. Préparation intensive à l'examen.",
    3: "Comprendre les fondamentaux de la Sécurité de l'Information. Protégez les données sensibles de votre entreprise grâce aux meilleures pratiques en matière de confidentialité, d'intégrité et de disponibilité.",
    4: "Parcours complet de Développement Web Full-Stack. Du HTML/CSS/JS au backend avancé, devenez un développeur polyvalent capable de construire et déployer des sites web modernes de A à Z.",
    5: "Spécialisation Développement Web avec Django. Plongez au cœur du framework pour perfectionnistes : architecture MVT, ORM, authentification et déploiement d'applications Python scalables.",
    6: "CEH v13 (Certified Ethical Hacker) - Niveau Expert. Devenez un expert en sécurité offensive. Apprenez les dernières techniques de hack éthique, pentesting et analyse de vulnérabilités pour protéger les infrastructures.",
    7: "Gouvernance et Sécurité de l'Information. Apprenez à gérer les risques, établir des politiques de sécurité efficaces et assurer la conformité pour protéger le capital informationnel de votre organisation.",
    8: "Initiation à l'Informatique : Windows & Internet. Maîtrisez les bases de l'ordinateur, la gestion des fichiers, et naviguez sur le web en toute sécurité et efficacité. Idéal pour les débutants.",
    9: "Bureautique Avancée : Microsoft Office (Word, Excel). Devenez productif avec la suite Office. Création de documents professionnels sous Word et traitement de données, tableaux et formules sous Excel.",
    10: "Maintenance Informatique 1er niveau. Apprenez à diagnostiquer les pannes courantes, effectuer des nettoyages systèmes et gérer l'entretien préventif de votre matériel informatique."
}

# --- Maintenance Services Descriptions ---
maintenance_updates = {
    1: "Diagnostic et réparation de tous types de pannes d'imprimantes : bourrage papier, défauts d'impression, codes erreurs. Intervention rapide et efficace pour minimiser vos temps d'arrêt.",
    2: "Nettoyage approfondi et entretien préventif. Nettoyage des têtes d'impression, des rouleaux d'entraînement et des mécanismes internes pour prolonger significativement la durée de vie de votre imprimante.",
    3: "Installation et configuration clé en main. Installation de nouvelles imprimantes, configuration réseau (Wi-Fi/Ethernet), installation des pilotes et formation rapide des utilisateurs.",
    4: "Diagnostic complet de votre ordinateur. Analyse détaillée des performances, détection de virus/malwares, vérification de l'état du disque dur et de la mémoire. Rapport de santé complet fourni.",
    5: "Réparation matérielle d'ordinateurs (PC/Laptop). Remplacement d'écrans cassés, claviers, disques durs, batteries et autres composants défectueux avec des pièces de haute qualité.",
    6: "Nettoyage et optimisation système. Suppression des fichiers temporaires, éradication de virus, mise à jour des pilotes et optimisation du démarrage pour retrouver un PC rapide et fluide.",
    7: "Upgrade et amélioration de performances. Boostez votre PC avec l'ajout de mémoire RAM ou le passage à un disque SSD ultra-rapide pour une seconde jeunesse de votre matériel.",
    8: "Installation et structuration de réseaux locaux. Mise en place de câblage, configuration de routeurs, switchs et répéteurs Wi-Fi pour une connectivité stable et performante en entreprise ou à domicile.",
    9: "Maintenance proactive de serveurs. Surveillance de l'état de santé, gestion des sauvegardes, mises à jour de sécurité et intervention rapide en cas d'incident pour assurer la continuité de service.",
    10: "Entretien spécifique Epson EcoTank. Procédure complète incluant le nettoyage des têtes, la remise à zéro des compteurs de tampons d'encre et la purge du système.",
    11: "Réparation experte d'imprimantes Laser HP. Remplacement de kits de fusion, nettoyage du chemin papier, et résolution des problèmes de qualité d'impression laser.",
    12: "Débouchage professionnel de têtes d'impression. Techniques avancées pour récupérer des têtes d'impression obstruées par de l'encre séchée, évitant souvent un remplacement coûteux.",
    13: "Entretien physique et thermique PC. Nettoyage de la poussière interne et remplacement de la pâte thermique processeur pour éviter la surchauffe et réduire le bruit de la ventilation.",
    14: "Optimisation logicielle Windows. Nettoyage du registre, désactivation des programmes inutiles au démarrage et configuration optimale pour une expérience Windows fluide.",
    15: "Récupération de données critiques. Tentative de récupération de fichiers perdus, effacés accidentellement ou inaccessibles sur disques durs et clés USB endommagés.",
    16: "Service Photos d'identité (Planche de 8). Photos conformes et de qualité pour tous vos documents administratifs (Passeport, CNI, Visa, Carte Vitale).",
    17: "Portrait Professionnel Corporate. Séance photo dédiée pour vos profils LinkedIn, CV ou site web, mettant en valeur votre image professionnelle.",
    18: "Tirage Photo Numérique Haute Qualité. Impression de vos souvenirs sur papier photo premium, disponible en plusieurs formats du 10x15 au format poster.",
    19: "Audit complet de parc informatique. Inventaire, analyse de vétusté et de sécurité de vos équipements pour optimiser vos investissements et votre maintenance.",
    20: "Conseil expert en achat matériel. Accompagnement personnalisé pour choisir les équipements (PC, Imprimantes, Serveurs) les plus adaptés à vos besoins et à votre budget.",
    21: "Sécurisation de réseaux Wi-Fi. Audit de sécurité, configuration de cryptage fort (WPA3) et mise en place de réseaux invités pour protéger vos données."
}

def update_db():
    # Update Services
    print("Updating Services...")
    for pk, desc in services_updates.items():
        try:
            obj = Service.objects.get(pk=pk)
            obj.description = desc
            obj.save()
            print(f"  [OK] Service {pk} updated.")
        except Service.DoesNotExist:
            print(f"  [skip] Service {pk} not found.")

    # Update Formations
    print("\nUpdating Formations...")
    for pk, desc in formations_updates.items():
        try:
            obj = Formation.objects.get(pk=pk)
            obj.description = desc
            obj.save()
            print(f"  [OK] Formation {pk} updated.")
        except Formation.DoesNotExist:
            print(f"  [skip] Formation {pk} not found.")

    # Update Maintenance Services
    print("\nUpdating Maintenance Services...")
    for pk, desc in maintenance_updates.items():
        try:
            obj = MaintenanceService.objects.get(pk=pk)
            obj.description = desc
            obj.save()
            print(f"  [OK] MaintenanceService {pk} updated.")
        except MaintenanceService.DoesNotExist:
            print(f"  [skip] MaintenanceService {pk} not found.")

if __name__ == "__main__":
    update_db()
