const refs = {
  toggle: document.querySelector(".switcher"),
  HTML: document.querySelector("html"),
};

const addDarkClassToHTML = () => {
  try {
    if (localStorage.getItem("theme") === "dark") {
      refs.HTML.classList.add("dark");
      refs.toggle.elements[1].checked = true;
    } else {
      refs.HTML.classList.remove("dark");
      refs.toggle.elements[0].checked = true;
    }
  } catch (err) {
    return;
  }
};

refs.toggle.addEventListener("change", (e) => {
  if (e.target.value === "dark") {
    refs.HTML.classList.add("dark");
    localStorage.setItem("theme", "dark");
  } else {
    refs.HTML.classList.remove("dark");
    localStorage.removeItem("theme");
  }
});

addDarkClassToHTML();
