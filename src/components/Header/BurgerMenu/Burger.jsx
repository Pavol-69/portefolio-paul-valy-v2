import "./Burger.scss";
import "../../../index.scss";

function Burger({ burgerOpened, setBurgerOpened, firstClick, setFirstClick }) {
  function handleBurgerOpening() {
    if (burgerOpened) {
      setBurgerOpened(false);
    } else {
      if (!firstClick) {
        setFirstClick(true);
      }
      setBurgerOpened(true);
    }
  }

  return (
    <div onClick={() => handleBurgerOpening()} className="burger_ctn elm_ct">
      <div
        className={`burger_line burger_line1 burger_line1${
          burgerOpened ? "_nrm" : firstClick ? "_rvs" : ""
        }`}
      />
      <div
        className={`burger_line burger_line2 burger_line2${
          burgerOpened ? "_nrm" : firstClick ? "_rvs" : ""
        }`}
      />
      <div
        className={`burger_line burger_line3 burger_line3${
          burgerOpened ? "_nrm" : firstClick ? "_rvs" : ""
        }`}
      />
    </div>
  );
}

export default Burger;
