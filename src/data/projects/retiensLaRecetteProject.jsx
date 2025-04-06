import { icons } from "../icons";

import retiensLaRecette from "../../assets/projects/retiens_la_recette.png";

export const retiensLaRecetteProject = {
  name: "Retiens la Recette",
  image: retiensLaRecette,
  github: "https://github.com/Pavol-69/retiens-la-recette",
  site: "https://retiens-la-recette.web.app/",
  tools: [
    icons.html.logo,
    icons.css.logo,
    icons.js.logo,
    icons.react.logo,
    icons.nodejs.logo,
    icons.express.logo,
    icons.psql.logo,
    icons.heroku.logo,
    icons.firebase.logo,
    icons.git.logo,
  ],
  openClassromm: false,
  description: (
    <>
      <h1>Description</h1>
      <img className="img_modal" src={retiensLaRecette} />
      <p>
        Seconde réalisation, un site de cuisine réalisé pour une de mes
        connaissances. Le cahier des charges était le suivant :
      </p>
      <ul>
        <li>
          Pourvoir mettre en ligne des recettes, avec une interface prévue à cet
          effet
        </li>
        <br />

        <li>
          Seul les personnes identifiées et acceptées par l'admin peuvent
          consulter le site :
          <ul>
            <li>
              L'admin doit pouvoir être capable de donner un rôle à chacun des
              utilisateurs comme rédacteur ou lecteur
            </li>
            <li>Il peut aussi simplement rejeter une inscription</li>
            <li>
              J'ai tout de même créé un compte invité afin que ceux qui
              parcourent ce portefolio puissent y jeter un oeil :
              <ul>
                <li>Adresse mail : invite@invite.fr</li>
                <li>Mot de passe : 123456</li>
              </ul>
            </li>
          </ul>
        </li>
        <br />
        <li>
          Possibilité de créer des catégories et les associer aux recettes que
          l'on souhaite regrouper
        </li>
        <br />
        <li>
          Il doit y avoir une fonction recherche, qui peut être faite selon le
          nom et/ou selon les catégories
        </li>
        <br />
        <li>
          Intégration jusqu'à 5 photos dans chaque recette que l'on peut faire
          défiler dans un carroussel
        </li>
        <br />
        <li>
          Possibilité de changer l'ordre des ingrédients et des étapes de la
          recette, et de les regrouper sous des sections
          <ul>
            <li>
              Utilisation d'une fonction drag & drop sur ce dernier point, pour
              capitaliser les recherches faites sur le premier projet, mais avec
              la difficulté supplémentaires de déplacer soit tout un groupe,
              soit juste un élément du groupe
            </li>
          </ul>
        </li>
      </ul>
    </>
  ),
};
