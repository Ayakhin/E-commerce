# Projet de Site E-commerce

Ce projet est une application de site e-commerce développée avec Node.js, Express, et Sequelize pour la gestion de la base de données. Ce document explique comment installer, configurer et lancer le projet.

## Prérequis

Avant de commencer, assurez-vous d'avoir les éléments suivants installés sur votre machine :

- [Node.js](https://nodejs.org/en/) (version 12 ou supérieure)
- [npm](https://www.npmjs.com/) (version 6 ou supérieure)
- [MySQL](https://www.mysql.com/) (ou un autre SGBD compatible avec Sequelize)

## Installation

1. Clonez le dépôt GitHub :

   ```bash
   git clone https://github.com/Ayakhin/E-commerce.git
   cd e-commerce-backend

Installez les dépendances :

Copier le code
npm install
Configuration
Configurez la base de données :

Créez une base de données MySQL.
Mettez à jour le fichier config/config.json avec vos informations de connexion à la base de données.
json
Copier le code
{
  "development": {
    "username": "votre_nom_utilisateur",
    "password": "votre_mot_de_passe",
    "database": "nom_de_votre_base_de_donnees",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "test": {
    "username": "votre_nom_utilisateur",
    "password": "votre_mot_de_passe",
    "database": "nom_de_votre_base_de_donnees_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "votre_nom_utilisateur",
    "password": "votre_mot_de_passe",
    "database": "nom_de_votre_base_de_donnees_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
Exécutez les migrations pour créer les tables de la base de données :

bash
Copier le code
npx sequelize-cli db:migrate
Lancement de l'application
Démarrez le serveur :

bash
Copier le code
npm start
L'application sera accessible à l'adresse http://localhost:3000.

Tests
Exécutez les tests pour vérifier que tout fonctionne correctement :

bash
Copier le code
npm test
Si vous rencontrez des problèmes avec des handles ouverts, exécutez les tests avec l'option --detectOpenHandles :

bash
Copier le code
npm test -- --detectOpenHandles
Structure du Projet
Voici une brève description des principaux dossiers et fichiers du projet :

## Back end
config/: Contient les fichiers de configuration pour la base de données.
controllers/: Contient les contrôleurs pour les routes de l'application.
middleware/: Contient les middlewares pour l'application.
migrations/: Contient les fichiers de migration pour la base de données.
models/: Contient les modèles Sequelize pour la base de données.
routes/: Contient les définitions des routes de l'application.
tests/: Contient les tests unitaires pour l'application.
app.js: Point d'entrée principal de l'application.
server.js: Démarre le serveur et écoute les requêtes entrantes.

## Front end

src/: Contient le code source de l'application React.
public/: Contient les fichiers statiques.
vite.config.js: Configuration de Vite.
tests/: Contient les tests unitaires pour l'application front-end.