# Déploiement sur PythonAnywhere (Architecture React + Django)

Cette documentation remplace les instructions précédentes. L'architecture a été mise à jour pour servir l'application React via Django.

## Prérequis Local

Avant chaque déploiement (mise à jour du code), vous devez compiler le Frontend :

1. Ouvrez un terminal dans le dossier `frontend`.
2. Lancez le build :

    ```bash
    npm run build
    ```

3. Vérifiez que le dossier `frontend/dist` a été mis à jour.
4. Commitez vos changements (y compris le dossier `dist`) :

    ```bash
    git add .
    git commit -m "Mise à jour avec build frontend"
    git push origin main
    ```

## Mise à jour sur PythonAnywhere

1. Connectez-vous à votre console Bash sur PythonAnywhere.
2. Allez dans le dossier du projet :

    ```bash
    cd Pcodeshestergn
    ```

3. Récupérez les changements :

    ```bash
    git pull origin main
    ```

4. Installez les nouvelles dépendances (une seule fois ou s'il y a des changements) :

    ```bash
    pip install -r requirements.txt
    ```

5. Collectez les fichiers statiques (Django va copier le frontend build dans le dossier public) :

    ```bash
    python manage.py collectstatic --noinput
    ```

6. (Optionnel) Appliquez les migrations si nécessaire :

    ```bash
    python manage.py migrate
    ```

## Rechargement

1. Allez dans l'onglet **Web**.
2. Cliquez sur le bouton vert **Reload**.

Votre site devrait maintenant afficher l'application React à la racine !
