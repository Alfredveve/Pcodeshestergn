# Deployer sur PythonAnywhere en toute sécurité

Vous avez maintenant sécurisé votre application. Le mot de passe Gmail n'est plus dans le code, mais dans un fichier `.env` sur votre ordinateur.

Pour mettre à jour PythonAnywhere, suivez ces étapes :

## Étape 1 : Envoyer les modifications sur GitHub

Sur votre ordinateur, ouvrez un terminal dans votre dossier de projet et exécutez les commandes suivantes :

```bash
git add .
git commit -m "Sécurisation des identifiants et ajout du formulaire de contact"
git push origin main
```

*(Remplacez `main` par le nom de votre branche si différent)*

## Étape 2 : Mettre à jour PythonAnywhere

1. **Connectez-vous** à votre compte PythonAnywhere.
2. Ouvrez une **console Bash**.
3. Allez dans votre dossier de projet et récupérez les changements :

```bash
cd Pcodeshestergn  # ou le nom de votre dossier
git pull origin main
```

1. Installez `python-dotenv` sur le serveur :

```bash
pip install python-dotenv
```

1. Appliquez les migrations (pour la nouvelle table de contact) :

```bash
python manage.py migrate
```

## Étape 3 : Configurer les variables d'environnement

Puisque le fichier `.env` n'est pas sur GitHub (sécurité oblige), vous devez créer ce fichier sur PythonAnywhere.

1. Toujours dans la console Bash de PythonAnywhere, créez/éditez le fichier `.env` :

```bash
nano .env
```

1. Collez le contenu suivant (avec vos VRAIS secrets) :

```ini
EMAIL_HOST_PASSWORD=kiht oiky kemn wbzc
SECRET_KEY=django-insecure-a8_ocx&t@@e66464dr!faj%(rv(%ia7vir_vi*fgpz(z@&b901
DEBUG=False
```

1. Sauvegardez et quittez (`Ctrl+O` pour sauvegarder, `Entrée` pour confirmer, `Ctrl+X` pour quitter).

## Étape 4 : Recharger le site

1. Allez dans l'onglet **Web**.
2. Cliquez sur le bouton vert **Reload**.

## Vérification

Allez sur votre site `vevebea.pythonanywhere.com/contact/` et testez le formulaire. Vous devriez recevoir un email !
