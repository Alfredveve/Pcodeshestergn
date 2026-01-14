@echo off
REM Script pour démarrer le serveur Django avec l'environnement virtuel demo
echo Activation de l'environnement virtuel demo...
call demo\Scripts\activate.bat
echo.
echo Démarrage du serveur Django...
python manage.py runserver
