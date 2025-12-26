#!/bin/bash
# Script de déploiement pour PythonAnywhere
# Copiez et collez ces commandes une par une dans la console Bash de PythonAnywhere

echo "=== Étape 1: Navigation vers le projet ==="
cd ~/Pcodeshestergn

echo "=== Étape 2: Récupération des dernières modifications ==="
git pull origin main

echo "=== Étape 3: Installation de python-dotenv ==="
pip install python-dotenv

echo "=== Étape 4: Application des migrations ==="
python manage.py migrate

echo "=== Étape 5: Collecte des fichiers statiques ==="
python manage.py collectstatic --noinput

echo "=== Déploiement terminé ! ==="
echo "Il reste à:"
echo "1. Créer le fichier .env avec vos secrets"
echo "2. Recharger l'application web depuis l'onglet Web"
