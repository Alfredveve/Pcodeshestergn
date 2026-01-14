# Guide de Récupération des Données depuis PythonAnywhere

Ce guide vous explique comment récupérer votre base de données depuis votre serveur PythonAnywhere (`vevebea.pythonanywhere.com`) vers votre environnement local.

## 📋 Prérequis

- Accès à votre compte PythonAnywhere (`vevebea`)
- Connexion Internet active
- Serveurs Django et React arrêtés localement (recommandé)

---

## 🎯 Méthode 1 : Via l'Interface Web (Recommandée)

Cette méthode est la plus simple et ne nécessite aucun outil supplémentaire.

### Étape 1 : Connexion à PythonAnywhere

1. Ouvrez votre navigateur
2. Allez sur [https://www.pythonanywhere.com/login/](https://www.pythonanywhere.com/login/)
3. Connectez-vous avec votre compte `vevebea`

### Étape 2 : Localiser la Base de Données

1. Cliquez sur l'onglet **"Files"** dans le menu principal
2. Naviguez vers votre dossier de projet : `Pcodeshestergn`
3. Cherchez le fichier `db.sqlite3`

### Étape 3 : Télécharger la Base de Données

1. Cliquez sur le fichier `db.sqlite3`
2. Cliquez sur le bouton **"Download"** (icône de téléchargement)
3. Le fichier sera téléchargé dans votre dossier de téléchargements

### Étape 4 : Vérifier le Téléchargement

1. Ouvrez votre dossier de téléchargements
2. Vérifiez que le fichier `db.sqlite3` est présent
3. Notez la taille du fichier (devrait être > 0 KB)

---

## 🔧 Méthode 2 : Via Console Bash + Export JSON

Si la méthode 1 ne fonctionne pas, utilisez cette alternative.

### Étape 1 : Ouvrir une Console Bash

1. Sur PythonAnywhere, cliquez sur **"Consoles"**
2. Cliquez sur **"Bash"** pour ouvrir une nouvelle console

### Étape 2 : Exporter les Données

```bash
# Aller dans le dossier du projet
cd Pcodeshestergn

# Exporter toutes les données en JSON
python manage.py dumpdata --natural-foreign --natural-primary \
  formations services maintenance home \
  --indent 2 --output data_export.json

# Vérifier que le fichier a été créé
ls -lh data_export.json
```

### Étape 3 : Télécharger le Fichier JSON

1. Retournez à l'onglet **"Files"**
2. Naviguez vers `Pcodeshestergn/data_export.json`
3. Téléchargez le fichier

---

## 💾 Restauration Locale

Une fois le fichier téléchargé, suivez ces étapes sur votre ordinateur local.

### Option A : Restauration de db.sqlite3 (Méthode 1)

```bash
# Aller dans votre dossier de projet
cd c:\Users\codeshester0011\Desktop\Pcodeshestergn

# Sauvegarder la base actuelle
copy db.sqlite3 db.sqlite3.backup

# Copier la base téléchargée
# Déplacez le fichier db.sqlite3 téléchargé depuis votre dossier de téléchargements
# vers c:\Users\codeshester0011\Desktop\Pcodeshestergn\
# Remplacez le fichier existant

# Vérifier les données
python check_data.py
```

### Option B : Import du JSON (Méthode 2)

```bash
# Aller dans votre dossier de projet
cd c:\Users\codeshester0011\Desktop\Pcodeshestergn

# Copier le fichier JSON téléchargé dans le dossier du projet

# Importer les données
python manage.py loaddata data_export.json

# Vérifier les données
python check_data.py
```

---

## ✅ Vérification

Après la restauration, vérifiez que tout fonctionne :

### 1. Vérifier via le Script

```bash
python check_data.py
```

Vous devriez voir :

```text
=== CONTENU DE LA BASE DE DONNÉES ===

Formations: X  (où X > 0)
  - Nom de la formation 1
  - Nom de la formation 2
  ...

Services: Y  (où Y > 0)
  - Nom du service 1
  - Nom du service 2
  ...

Maintenance Requests: Z
```

### 2. Vérifier via l'API

Démarrez le serveur Django :

```bash
py manage.py runserver
```

Ouvrez dans votre navigateur :

- [http://127.0.0.1:8000/api/formations/](http://127.0.0.1:8000/api/formations/)
- [http://127.0.0.1:8000/api/services/](http://127.0.0.1:8000/api/services/)

Vous devriez voir des données JSON.

### 3. Vérifier via le Frontend

Démarrez le serveur React :

```bash
cd frontend
npm run dev
```

Ouvrez [http://localhost:5173](http://localhost:5173) et vérifiez que les formations et services s'affichent.

---

## 🆘 Dépannage

### Problème : Le fichier db.sqlite3 n'existe pas sur PythonAnywhere

**Solution** : Utilisez la Méthode 2 (Export JSON) ou vérifiez que vous êtes dans le bon dossier.

### Problème : Le fichier téléchargé est vide (0 KB)

**Solution** :

1. Vérifiez que vous avez bien des données sur le serveur de production
2. Essayez la Méthode 2 (Export JSON)

### Problème : Erreur lors de l'import JSON

**Solution** :

```bash
# Supprimer les données existantes avant l'import
python manage.py flush --no-input
python manage.py loaddata data_export.json
```

### Problème : Les images ne s'affichent pas

**Solution** : Les images sont stockées dans le dossier `media/`. Vous devrez également télécharger ce dossier depuis PythonAnywhere.

---

## 📞 Besoin d'Aide ?

Si vous rencontrez des difficultés, notez :

- La méthode que vous avez essayée
- Le message d'erreur exact (si applicable)
- La taille du fichier téléchargé

Je pourrai alors vous aider à résoudre le problème !
