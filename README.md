# Documentation application BurgerVerseOnline

# Sommaire
- [Documentation application BurgerVerseOnline](#documentation-application-burgerverseonline)
- [Sommaire](#sommaire)
- [Contexte et Description de l'application](#contexte-et-description-de-lapplication)
- [Conception](#conception)
  - [Diagramme de Données](#diagramme-de-données)
  - [Structure Strapi](#structure-strapi)
  - [Structure Front-End](#structure-front-end)
  - [Fonctionnement de l'application](#fonctionnement-de-lapplication)
    - [Diagramme de séquence](#diagramme-de-séquence)
    - [Diagramme de cas d'utilisation](#diagramme-de-cas-dutilisation)
- [Déploiement](#déploiement)
  - [Prérequis](#prérequis)
  - [Déploiement avec Make](#déploiement-avec-make)
  - [Déploiement sans Make](#déploiement-sans-make)

# Contexte et Description de l'application

Il s'agit d'une application web fictive pour un exposé d'anglais dans lequel nous devons présenter une entreprise fictive. Nous avons décidé d'aller un peu plus loin et faire un site vitrine pour la solution de cette entreprise.
L'entreprise en question est BurgerVerseOnline, une chaine de restauration rapide fictive qui propose des burgers personnalisés à la commande.

Lors de la création d'une commande, on choisit nos ingrédients : pain, viandes, accompagnements etc..

# Conception

## Diagramme de Données

![Diagramme de données](./doc_resources/Diagramme_Classe_Strapi.drawio.png)

## Structure Strapi

<u>Collections:</u>
-   `IngredientTypes`: Catégories d'ingrédients (pain, viande, accompagnement etc..)
-   `Ingredient`: Ingrédients (contient le nom, l'image, le prix et la catégorie)
-   `Order`: Commandes (contient les ingrédients, le prix total, la date de création et l'utilisateur associé)
-   `User`: Collection user de base de Strapi, utilisée pour l'authentification

Les collections `IngredientTypes` et `Ingredient` sont liées par une relation 1:n, un type d'ingrédient peut avoir plusieurs ingrédients.

La collection `Order` est liée à la collection `User` par une relation 1:n, un utilisateur peut avoir plusieurs commandes.

La collection `Ingredient` est liée à la collection `Order` par une relation n:n, une commande peut avoir plusieurs ingrédients et un ingrédient peut être dans plusieurs commandes.

<u>Single:</u>
-  `Home`: Page d'accueil du site
-  `Login`: Page de connexion
-  `Register`: Page d'inscription
-  `Order`: Page de commande (Protégée par authentification)

<u>Components:</u>
-  `Menu`: Menu de navigation
-  `Footer`: Contient les champs spécifiques au footer (texte, liens etc..)
-  `Slider`: Champs contenant des textes et images

Les components sont utilisés dans les singles, pour le front-end du site, afin de créer des élements réutilisables.


![Schema Strapi](./doc_resources/Schema_Strapi.drawio.png)


## Structure Front-End

Le front-end est composé de 5 pages :
-  `Home`: Page d'accueil du site
-  `Login`: Page de connexion
-  `Register`: Page d'inscription
-  `Account`: Page de compte (Protégée par authentification)
-  `Order`: Page de commande (Protégée par authentification)

Le front est développé avec **Svelte**, un framework javascript.

<!-- #### **Diagramme de classe**

![Diagramme de classe](./doc_resources/Diagramme_Classe_Front.drawio.png) -->

## Fonctionnement de l'application

### Diagramme de séquence

![Diagramme de séquence](./doc_resources/Diagramme_Séquence.drawio.png)

### Diagramme de cas d'utilisation

![Diagramme de cas d'utilisation](./doc_resources/Diagramme_Cas_Utilisation.drawio.png)

# Déploiement

## Prérequis

- Docker
- Docker-compose (intégré à Docker sur Windows et Mac)
- Make (optionnel)

## Déploiement avec Make
Ouvrir un terminal à la racine de l'application et exécuter les commandes suivantes :

- `make up` : Déploie l'application et la démarre
- `make stop` : Arrête l'application
- `make start` : Démarre l'application
- `make clean` : Supprime les données de l'application

## Déploiement sans Make
Ouvrir un terminal à la racine de l'application et exécuter les commandes suivantes :

- `docker compose up -d` : Déploie l'application
- `docker compose stop` : Arrête l'application
- `docker compose start` : Démarre l'application
- `docker compose down -v --rmi all` : Supprime les données de l'application