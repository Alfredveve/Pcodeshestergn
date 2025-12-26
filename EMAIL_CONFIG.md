# Configuration Email pour le Formulaire de Contact

## Configuration Gmail

Pour que les emails fonctionnent, vous devez configurer un **mot de passe d'application Gmail** :

### Étapes pour créer un mot de passe d'application Gmail

1. **Activer la validation en deux étapes** sur votre compte Gmail
   - Allez sur <https://myaccount.google.com/security>
   - Activez la "Validation en deux étapes"

2. **Créer un mot de passe d'application**
   - Allez sur <https://myaccount.google.com/apppasswords>
   - Sélectionnez "Autre (nom personnalisé)"
   - Entrez "Django Codeshestergn"
   - Cliquez sur "Générer"
   - Copiez le mot de passe de 16 caractères généré

3. **Ajouter le mot de passe dans settings.py**
   - Ouvrez `Pcodeshestergn/settings.py`
   - Trouvez la ligne `EMAIL_HOST_PASSWORD = ''`
   - Remplacez par : `EMAIL_HOST_PASSWORD = 'votre_mot_de_passe_application'`

## Alternative : Backend Console (pour le développement)

Si vous voulez tester sans configurer Gmail, vous pouvez utiliser le backend console qui affiche les emails dans le terminal :

```python
# Dans settings.py, remplacez :
EMAIL_BACKEND = 'django.core.mail.backends.smtp.EmailBackend'

# Par :
EMAIL_BACKEND = 'django.core.mail.backends.console.EmailBackend'
```

Avec cette configuration, les emails s'afficheront dans le terminal au lieu d'être envoyés.

## Fonctionnement

Lorsqu'un utilisateur soumet le formulaire de contact :

1. ✅ Le message est sauvegardé dans la base de données
2. ✅ Un email est envoyé à `codeshester@gmail.com` avec :
   - Le nom de l'expéditeur
   - Son adresse email
   - Le sujet choisi
   - Le message complet
3. ✅ L'utilisateur voit un message de confirmation
4. ✅ Redirection vers la page de contact

## Note Importante

L'envoi d'email utilise `fail_silently=True`, ce qui signifie que même si l'email échoue (par exemple, si le mot de passe n'est pas configuré), le formulaire continuera de fonctionner et sauvegardera le message dans la base de données. Vous pourrez toujours consulter les messages via l'admin Django.
