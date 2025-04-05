import { icons } from "../icons";

import pavolMagic from "../../assets/projects/pavol_s_magic.png";

export const pavolMagicProject = {
  name: "Pavol's Magic",
  image: pavolMagic,
  github: "https://github.com/Pavol-69/pavols-magic",
  site: "",
  tools: [
    icons.html.logo,
    icons.css.logo,
    icons.js.logo,
    icons.react.logo,
    icons.nodejs.logo,
    icons.express.logo,
    icons.mongodb.logo,
    icons.git.logo,
  ],
  openClassromm: false,
  description: (
    <>
      <h1>Description</h1>
      <p>
        Premier site réalisé, fait une première fois avec juste HTML / CSS / JS,
        puis refait une seconde fois sous React.
        <br />
        <br />
        Fan du jeu de cartes Magic The Gathering, mon but ici était de
        m'inspirer du site <a href="https://www.archidekt.com">Archidekt</a>, un
        site que j'aime beaucoup. <br />
        <br />
        Mon but ici était d'apprendre le plus de choses possible, que ce soit en
        FrontEnd ou en BackEnd, en créant un site 100% fonctionnel. J'ai donc
        décidé de tout coder moi-même, sans importer le moindre composant. :
      </p>

      <ul>
        <li>
          Intégration d'une API pour avoir de base un pool de cartes avec toutes
          leurs informations
        </li>
        <br />
        <li>
          Gestion des utilisateurs
          <ul>
            <li>Inscription</li>
            <li>Connexion</li>
            <li>Desinscription</li>
          </ul>
        </li>
        <br />
        <li>
          Gestion des cartes
          <ul>
            <li>Ajout d'une liste, propre à l'utilisateur</li>
            <li>Modification</li>
            <li>Suppression</li>
            <li>
              Possibilité de groupes de cartes personnalisés dans chaque liste
            </li>
            <li>Sauvegarde des chaque liste dans une bdd</li>
          </ul>
        </li>
        <br />
        <li>
          Intégration de fonctions FrontEnd directement inspirées du site
          référence
          <ul>
            <li>Fonction recherche</li>
            <li>Effet de cascade lorsqu'on passe sur les cartes</li>
            <li>
              Fonction Drag & Drop pour trier les cartes dans les groupes
              manuellement
            </li>
          </ul>
        </li>
      </ul>
    </>
  ),
};
