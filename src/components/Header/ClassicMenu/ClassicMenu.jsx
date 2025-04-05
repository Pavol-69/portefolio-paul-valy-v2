import "./ClassicMenu.scss";
import "../../../index.scss";

function ClassicMenu({ headerProps, refList }) {
  return (
    <div className="classic_menu_ctn elm_ct">
      {headerProps.map((btn, index) => (
        <div
          className="classic_menu_btn elm_ct"
          key={index}
          onClick={() => btn.function(refList[index], -80)}
        >
          {btn.name}
        </div>
      ))}
    </div>
  );
}

export default ClassicMenu;
