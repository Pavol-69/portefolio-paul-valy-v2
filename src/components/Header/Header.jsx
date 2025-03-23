import "./Header.scss";
import "../../index.scss";

import BurgerMenu from "./BurgerMenu/BurgerMenu";
import ClassicMenu from "./ClassicMenu/ClassicMenu";

import { useState } from "react";

function Header({ headerProps, mobile }) {
  const [burgerOpened, setBurgerOpened] = useState(false);
  const [firstClick, setFirstClick] = useState(false); // pour éviter de lancer l'animation à l'ouverture de la page
  return (
    <header
      className={`header_${
        firstClick ? (burgerOpened ? "opening" : "closing") : ""
      }`}
      onBlur={() => setBurgerOpened(false)}
      tabIndex="0"
    >
      {mobile ? (
        <BurgerMenu
          headerProps={headerProps}
          setBurgerOpened={setBurgerOpened}
          burgerOpened={burgerOpened}
          firstClick={firstClick}
          setFirstClick={setFirstClick}
        />
      ) : (
        <ClassicMenu headerProps={headerProps} />
      )}
    </header>
  );
}

export default Header;
