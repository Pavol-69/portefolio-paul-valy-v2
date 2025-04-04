import "./Presentation.scss";
import "../../index.scss";

import profilImg from "../../assets/images/photo_profil2.jpg";

function Presentation() {
  return (
    <section className="pres_ctn elm_ct">
      <img alt="photo profil" src={profilImg} />
      <p>
        Bonjour, et bienvenue sur mon portefolio. Je m'appelle Paul Valy, j'ai
        32 ans, et je suis à le recherche d'opportunités pour un poste de
        Développeur Web. Après avoir acquis une expérience significative de 7
        années en tant qu'Ingénieur Mécanique dans le secteur de l'automobile,
        j'ai décidé de me reconvertir dans le domaine du développement web,
        suite à une formation en autodidacte. Tenant absolument à créer des
        sites web 100% fonctionnel pour me former, j'ai pu développer mes
        capacités autant en FrontEnd qu'en BackEnd. Animé par une passion
        croissante pour ce nouveau domaine, je suis constamment en quête
        d'apprentissage et désire renforcer continuellement mes compétences. Ma
        nature inventive, ma ténacité et ma curiosité sont autant d'atouts qui
        me permettront de surmonter les défis rencontrés et de m'épanouir dans
        ce nouvel univers professionnel.
      </p>
    </section>
  );
}

export default Presentation;
