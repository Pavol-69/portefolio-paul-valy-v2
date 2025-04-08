import "./Header.scss";
import "../../index.scss";

import BurgerMenu from "./BurgerMenu/BurgerMenu";
import ClassicMenu from "./ClassicMenu/ClassicMenu";
import CVButton from "./CVButton/CVButton";

import { useState } from "react";

function Header({ headerProps, mobile, refList }) {
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
      <CVButton />
      {mobile ? (
        <BurgerMenu
          headerProps={headerProps}
          setBurgerOpened={setBurgerOpened}
          burgerOpened={burgerOpened}
          firstClick={firstClick}
          setFirstClick={setFirstClick}
          refList={refList}
        />
      ) : (
        <ClassicMenu headerProps={headerProps} refList={refList} />
      )}
    </header>
  );
}

export default Header;
