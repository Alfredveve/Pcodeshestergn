# Guide d'utilisation de GitHub - Pcodeshestergn

Ce guide explique comment gérer votre projet avec Git et GitHub.

## 1. Envoyer vos modifications (Push)

Lorsque vous faites des modifications sur votre ordinateur, suivez ces étapes :

```bash
# 1. Voir les fichiers modifiés/nouveaux
git status

# 2. Ajouter tous les fichiers modifiés
git add .

# 3. Enregistrer les modifications avec un message
git commit -m "MESSAGE DE VOTRE CHOIX"

# 4. Envoyer vers GitHub
git push origin main
```

## 2. Récupérer les modifications (Pull)

Si vous travaillez sur un autre ordinateur (ou sur PythonAnywhere), récupérez la dernière version :

```bash
git pull origin main
```

## 3. Commandes utiles

- `git log --oneline -n 5` : Affiche les 5 derniers commits.
- `git diff` : Voir les changements non enregistrés.
- `git remote -v` : Voir l'adresse du dépôt distant.

## 4. Lien vers votre projet

Vous pouvez voir votre code en ligne ici : [Pcodeshestergn sur GitHub](https://github.com/Alfredveve/Pcodeshestergn)

> [!TIP]
> Toujours faire un `git status` avant de commit pour vérifier ce que vous envoyez.
