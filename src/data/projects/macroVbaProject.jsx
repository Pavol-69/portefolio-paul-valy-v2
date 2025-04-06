import { icons } from "../icons";

import macro from "../../assets/projects/macro.png";

export const macroVbaProject = {
  name: "Macro VBA",
  image: macro,
  github: "",
  site: "",
  tools: [icons.vba.logo, icons.office.logo, icons.catia.logo],
  openClassromm: false,
  description: (
    <>
      <h1>Description</h1>
      <img className="img_modal" src={macro} />
      <p>
        En plus de ma formation autodidacte, alors que j'étais employé chez
        Expleo Plastic Solutions, j'ai également passé plusieurs années à
        exclusivement développer des outils informatiques pour mes collègues via
        les macros VBA sur le logiciel de 3D Catia V5 et sur le pack Microsoft
        Office. Un travail très apprécié puisque l'on pouvait gagner beaucoup de
        temps grâce à cela.
      </p>
      <br />
      <p>
        Cela comprenait :
        <ul>
          <li>Automatisation des tâches</li>
          <li>Calcul de données complexes</li>
          <li>Personnalisation des menus pour une interface dédiée</li>
          <li>Tri automatique des données</li>
          <li>...</li>
        </ul>
      </p>
      <p>
        Le langage VBA étant limité sur ces logiciels, certaines fonctions
        n'étaient parfois pas disponibles , il fallait bien souvent être
        inventif, et être persévérant dans les recherches, pour contourner les
        problèmes et arriver à nos fins (exemple : Sur PowerPoint, nous avions
        besoin des évènements liés à la souris, mais ces derniers ne sont pas
        intégrés de base).
      </p>
      <p>
        Un exemple de projet : Calcul d'une boite englobante et de la surface
        projetée d'une pièce 3D
      </p>
      <ul>
        <li>
          Une boîte englobante est simplement le calcul des dimensions mini X, Y
          et Z d'une pièce 3D, cela n'a été si compliqué que ça à réaliser
        </li>
        <br />
        <li>
          Le vrai challenge était de calculer la surface projetée, que l'on peut
          décrire comme l'ombre de la pièce projetée sur un plan suivant un axe,
          utile pour callibrer correctement les machines qui réaliseront les
          pièces physiquement par la suite.
        </li>
        <br />
        <ul>
          <li>
            Catia n'a pas de fonction pour calculer cette surface, mais il est
            cependant capable de créer une image .tiff en noir et blanc, où le
            noir correspond à cette surface projetée
          </li>
          <br />
          <li>
            L'astuce a été de plonger dans les octets de l'image .tiff, et grâce
            à la{" "}
            <a
              href="https://www.itu.int/itudoc/itu-t/com16/tiff-fx/docs/tiff6.pdf"
              className="txt_clr1"
              target="_blank"
            >
              documentation trouvable sur internet
            </a>
            , il a été possible de faire le chemin inverse de la compression, et
            de traduire ces chaînes de 1 et de 0 en un nombre de pixels (voir
            tableau page 45 pour exemple).
          </li>
          <br />
          <li>
            Une fois qu'on avait le nombre de pixels noirs par rapport à celui
            de pixels blancs, nous pouvions calculer la surface souhaitée grâce
            à la densité de pixel au cm² indiquée dans les paramètres de
            génération de l'image, et le tour était joué.
          </li>
          <br />
          <li>
            Le résultat final était très précis, bien plus que si le calcul
            avait était fait à la main, et on l'avait en quelques secondes
            seulement.
          </li>
        </ul>
      </ul>
    </>
  ),
};
