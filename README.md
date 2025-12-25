# Pcodeshestergn

Une plateforme moderne de gestion de services et de formations, développée avec Django.

## 🚀 Fonctionnalités

- **Gestion des Services** : Inscription et suivi des services (réparation, maintenance, etc.).
- **Catalogue de Formations** : Liste détaillée des formations disponibles avec options d'inscription.
- **Interface Premium** : Design moderne, réactif et optimisé pour une expérience utilisateur fluide.
- **Administration Puissante** : Intégration de Jazzmin pour une interface d'administration élégante et fonctionnelle.

## 🛠️ Installation Locale

1. **Cloner le projet** :

   ```bash
   git clone https://github.com/Alfredveve/Pcodeshestergn.git
   cd Pcodeshestergn
   ```

2. **Créer un environnement virtuel** :

   ```bash
   python -m venv venv
   venv\Scripts\activate  # Sur Windows
   ```

3. **Installer les dépendances** :

   ```bash
   pip install -r requirements.txt
   ```

4. **Lancer les migrations** :

   ```bash
   python manage.py migrate
   ```

5. **Démarrer le serveur** :

   ```bash
   python manage.py runserver
   ```

## 🌐 Déploiement

Le projet est conçu pour être déployé facilement sur des plateformes comme **PythonAnywhere**. Consultez le fichier `GITHUB_GUIDE.md` pour plus de détails sur la gestion du code.

## 📝 Technologies utilisées

- **Backend** : Django 5.1
- **UI/UX** : Vanilla CSS, HTML5, JavaScript
- **Dashboard** : Django Jazzmin
- **Base de données** : SQLite (Dev) / PostgreSQL (Prod recommandée)

---
Développé avec ❤️ par **Alfred Veve**
