import iconReact from "../images/icons/React.png"
import iCss from "../images/icons/css.jpg"
import iExpress from "../images/icons/express.jpg"
import iVisual from "../images/icons/visualstudio.jpg"
import iVite from "../images/icons/vite.png"
import iMongo from "../images/icons/Mongo.png"
import iItellij from "../images/icons/intellij.jpg"
import iNode from "../images/icons/node.png"

export const Projects = [
  {
    id: 0,
    nom: "Restaurant little Lemon",
    desc: "Application web complète permettant aux clients d’un restaurant de réserver une table en ligne. L’objectif principal était d’offrir une expérience fluide de réservation tout en assurant une gestion dynamique côté serveur et une expérience utilisateur moderne côté client.",
    icons:[iconReact,iCss,iExpress,iMongo,iItellij,iVite,iNode]
  },
  {
    id:1,
    nom:"Distributions koba global inc",
    desc:"Développement d’une application web full-stack pour la gestion de commandes de produits alimentaires africains. Ce projet permet aux clients de commander en ligne, de recevoir un courriel de confirmation automatique, et au commerçant de consulter les détails des commandes.",
    icons:[iconReact,iCss,iExpress,iVisual,iVite,iNode]
  },
];
