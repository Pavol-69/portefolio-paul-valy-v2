export const headerProps = [
  {
    name: "Accueil",
    function: () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },
  },
  {
    name: "Présentation",
    function: (ref, rectif) => {
      scroll(ref, rectif);
    },
  },
  {
    name: "Projets",
    function: (ref, rectif) => {
      scroll(ref, rectif);
    },
  },
  {
    name: "Technologies",
    function: (ref, rectif) => {
      scroll(ref, rectif);
    },
  },
  {
    name: "Contact",
    function: (ref, rectif) => {
      scroll(ref, rectif);
    },
  },
];

function scroll(ref, rectif) {
  window.scrollTo({
    top: ref.current.offsetTop + rectif,
    behavior: "smooth",
  });
}
