import iconReact from "../images/icons/React.png";
import iCss from "../images/icons/css.jpg";
import iExpress from "../images/icons/express.jpg";
import iVisual from "../images/icons/visualstudio.jpg";
import iVite from "../images/icons/vite.png";
import iMongo from "../images/icons/Mongo.png";
import iItellij from "../images/icons/intellij.jpg";
import Ijava from "../images/icons/java.png";
import Ihtml from "../images/icons/html.png";
import Ipostgres from "../images/icons/PostgreSql.jpg";
import Imongo from "../images/icons/Mongo.png";
import Ibitbucket from "../images/icons/bitbucket.png";
import IVisStudio from "../images/icons/visualStudio.png";
import iCsharp from "../images/icons/c-sharp.png";
import Ijs from "../images/icons/js.png";
import Isql from "../images/icons/SQL.png";
import iNode from "../images/icons/node.png";
import lemon1 from "../images/lemons/lemon1.PNG";
import lemon2 from "../images/lemons/lemon2.PNG";
import lemon3 from "../images/lemons/lemon3.PNG";
import lemon4 from "../images/lemons/lemon4.PNG";
import lemon5 from "../images/lemons/lemon5.PNG";
import lemon6 from "../images/lemons/lemon6.PNG";
import lemon7 from "../images/lemons/lemon7.PNG";
import lemon8 from "../images/lemons/lemon8.PNG";
import lemon9 from "../images/lemons/lemon9.PNG";
import lemon10 from "../images/lemons/lemon10.PNG";
import koba1 from "../images/kobas/Koba1.PNG";
import koba2 from "../images/kobas/Koba2.PNG";
import koba3 from "../images/kobas/Koba3.PNG";

export const projects = [
  {
    id: 0,
    nom: "Restaurant little Lemon",
    desc: "Application web complète permettant aux clients d’un restaurant de réserver une table en ligne. L’objectif principal était d’offrir une expérience fluide de réservation tout en assurant une gestion dynamique côté serveur et une expérience utilisateur moderne côté client.",
    icons: [iconReact, iCss, iExpress, iMongo, iItellij, iVite, iNode],
    imgs: [
      lemon1,
      lemon2,
      lemon3,
      lemon4,
      lemon5,
      lemon6,
      lemon7,
      lemon8,
      lemon9,
      lemon10,
    ],
    titre:
      "Système de Réservation en Ligne – Little Lemon développé avec React et Node.js",
    stack_technique: [
      "React",
      "React Router",
      "Context API",
      "CSS",
      "Node.js",
      "Express",
      "MongoDB (Mongoose)",
      "Axios",
      "LocalStorage",
      "JWT",
      "Render",
    ],
    fonctionnalites: [
      "Recherche automatique des réservations par numéro de téléphone (persisté dans localStorage)",
      "Vérification dynamique des disponibilités et filtrage des réservations expirées",
      "Formulaire de réservation intelligent avec validation avancée",
      "Modification et suppression des réservations avec mise à jour du localStorage",
      "Interface mobile responsive et intuitive",
      "Authentification utilisateur avec Context API dans React",
      "Déploiement full-stack sur Render",
    ],
    competences_acquises: [
      "Gestion avancée de l’état avec React (Context + Hooks)",
      "Interaction asynchrone avec une API REST sécurisée",
      "Stockage local (localStorage) pour persister les données utilisateur",
      "Bonnes pratiques de validation et UX",
      "Filtrage temporel en JavaScript natif pour détecter les réservations expirées",
      "Optimisation des useEffect pour éviter les rechargements inutiles",
      "Protection des clés d’API et configuration des variables d’environnement sur Render",
    ],
    defis_releves: [
      "Comparer avec précision une date et heure future à l'heure actuelle",
      "Éviter les rechargements inutiles tout en mettant à jour les données en temps réel",
      "Structurer correctement les useEffect et gérer les dépendances",
      "Protéger les clés d’API lors du déploiement backend",
    ],
    lien:"athanase1.github.io/resto-littlelemon/"
  },
  {
    id: 1,
    nom: "Distributions koba global inc",
    desc: "Développement d’une application web full-stack pour la gestion de commandes de produits alimentaires africains. Ce projet permet aux clients de commander en ligne, de recevoir un courriel de confirmation automatique, et au commerçant de consulter les détails des commandes.",
    icons: [iconReact, iCss, iExpress, iVisual, iVite, iNode],
    imgs: [koba1, koba2, koba3],
    titre:
      "Application de Gestion de Commandes – Distributions Kobal Global Inc développée avec React,Node.js et Mongoose DB",

    stack_technique: [
      "React",
      "Node.js",
      "Nodemailer",
      "Dotenv",
      "Render",
      "Axios",
      "Express.js",
      "CSS",
    ],

    fonctionnalites: [
      "Interface utilisateur fluide et responsive",
      "Formulaire de commande client avec validation",
      "Affichage dynamique des produits (nom, quantité, prix)",
      "Stockage local du numéro de téléphone pour pré-remplir les futures commandes",
      "API REST pour recevoir et traiter les commandes",
      "Envoi automatique de courriels de confirmation (via Gmail SMTP)",
      "Variables d’environnement sécurisées pour l’envoi de mails",
    ],
    competences_acquises: [
      "Mise en place d'une API REST performante avec Node.js et Express",
      "Gestion de l’état et des données côté frontend avec React et Axios",
      "Utilisation de TailwindCSS pour créer une interface moderne et responsive",
      "Mise en place d’un système d’e-mails automatisés avec Nodemailer",
      "Protection des informations sensibles via les variables d’environnement",
      "Déploiement d’un backend sur Render avec configuration sécurisée",
    ],
    defis_releves: [
      "Assurer la fiabilité de l’envoi des e-mails malgré les limitations de Gmail SMTP",
      "Structurer le code backend avec séparation claire des routes et contrôleurs",
      "Gérer correctement la persistance du numéro de téléphone dans le navigateur",
      "Adapter le système aux contraintes de performances en production",
    ],
    lien:"www.distributionskoba.com"
  },
];

export const compentences = [
  {
    id: 0,
    nom: "React js",
    icon: iconReact,
    niv: "Avancé",
    étoile: 4,
    type: "FrontEnd",
  },
  {
    id: 1,
    nom: "Node.js",
    icon: iNode,
    niv: "Intermédiaire",
    étoile: 4,
    type: "BackEnd",
  },
  {
    id: 2,
    nom: "HTML",
    icon: Ihtml,
    niv: "Expert",
    étoile: 5,
    type: "FrontEnd",
  },
  {
    id: 3,
    nom: "Css",
    icon: iCss,
    niv: "Expert",
    étoile: 5,
    type: "FrontEnd",
  },
  {
    id: 4,
    nom: "Java",
    icon: Ijava,
    niv: "Avancé",
    étoile: 4,
    type: "BackEnd",
  },
  {
    id: 5,
    nom: "Express js",
    icon: iExpress,
    niv: "Avancé",
    étoile: 4,
    type: "BackEnd",
  },
  {
    id: 6,
    nom: "Intellij",
    icon: iItellij,
    niv: "avancé",
    étoile: 4,
    type: "IDE",
  },
  {
    id: 7,
    nom: "Visual Studio core",
    icon: iVisual,
    niv: "avancé",
    étoile: 4,
    type: "IDE",
  },
  {
    id: 8,
    nom: "Webstorm",
    icon: iItellij,
    niv: "avancé",
    étoile: 4,
    type: "IDE",
  },
  {
    id: 9,
    nom: "Visual studio",
    icon: IVisStudio,
    niv: "avancé",
    étoile: 4,
    type: "IDE",
  },
  {
    id: 10,
    nom: "C-sharp",
    icon: iCsharp,
    niv: "avancé",
    étoile: 4,
    type: "BackEnd",
  },
  {
    id: 11,
    nom: "SQL",
    icon: Isql,
    niv: "Avancé",
    étoile: 4,
    type: "Base de donées",
  },
  {
    id: 12,
    nom: "Mongoose db",
    icon: Imongo,
    niv: "débutant",
    étoile: 2,
    type: "Base de donées",
  },
  {
    id: 13,
    nom: "Postgres",
    icon: Ipostgres,
    niv: "Avancé",
    étoile: 4,
    type: "Base de donées",
  },
  {
    id: 13,
    nom: "JavaScript",
    icon: Ijs,
    niv: "Avancé",
    étoile: 4,
    type: "FrontEnd",
  },
];
