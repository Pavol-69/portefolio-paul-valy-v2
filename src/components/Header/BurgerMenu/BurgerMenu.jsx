import "./BurgerMenu.scss";
import "../../../index.scss";

import Burger from "./Burger";

function BurgerMenu({
  headerProps,
  burgerOpened,
  setBurgerOpened,
  firstClick,
  setFirstClick,
}) {
  return (
    <>
      <Burger
        setBurgerOpened={setBurgerOpened}
        burgerOpened={burgerOpened}
        headerProps={headerProps}
        firstClick={firstClick}
        setFirstClick={setFirstClick}
      />
      <div className="burger_btn_ctn">
        {headerProps.map((btn, index) => (
          <div
            className={`burger_btn burger_btn_${index + 1} burger_btn_${
              index + 1
            }_${firstClick ? (burgerOpened ? "nrm" : "rvs") : ""} elm_ct`}
            key={index}
            onClick={() => {
              setBurgerOpened(false);
              btn.function();
            }}
          >
            {btn.name}
          </div>
        ))}
      </div>
    </>
  );
}

export default BurgerMenu;
