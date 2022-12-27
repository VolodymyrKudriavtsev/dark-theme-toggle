const refs = {
  toggle: document.querySelector(".switcher"),
  // toggleLight: document.querySelector(".switcher__radio--light"),
  // toggleDark: document.querySelector(".switcher__radio--dark"),
  HTML: document.querySelector("html"),
};

// const addDarkClassToHTML = () => {
//   try {
//     if (localStorage.getItem("theme") === "dark") {
//       refs.HTML.classList.add("dark");
//       refs.toggleDark.checked = true;
//     } else {
//       refs.HTML.classList.remove("dark");
//     }
//   } catch (err) {
//     return;
//   }
// };

// const onThemeToggleClick = (e) => {
//   localStorage.getItem("theme") === "dark"
//     ? localStorage.removeItem("theme")
//     : localStorage.setItem("theme", "dark");

//   addDarkClassToHTML();
// };

// refs.themeToggle.addEventListener("click", onThemeToggleClick);

refs.toggle.addEventListener("change", (e) => {
  console.log("e.target:", e.target);
});

// refs.toggleLight.addEventListener("change", () => {
//   console.log("CHANGE!!!");
//   console.log(refs.toggleLight.checked);
//   console.log(refs.toggleDark.checked);
// });

// refs.toggleDark.addEventListener("click", () => {
//   console.log("CKICK!!!");
//   console.log(refs.toggleDark.checked);
//   console.log(refs.toggleLight.checked);
// });

// addDarkClassToHTML();
