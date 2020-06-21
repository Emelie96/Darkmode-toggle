let darkMode = localStorage.getItem("darkMode");
const darkModeToogle = document.getElementById("checkbox");
const mode = document.getElementById("mode");

const enableDarkMode = () => {
  document.body.classList.add("darkmode");
  localStorage.setItem("darkMode", "enabled");
};

const disableDarkMode = () => {
  document.body.classList.remove("darkmode");
  localStorage.setItem("darkMode", "disabled");
};

if (darkMode === "enabled") {
  enableDarkMode();
}

darkModeToogle.addEventListener("click", () => {
  darkMode = localStorage.getItem("darkMode");
  if (darkMode !== "enabled") {
    enableDarkMode();
  } else {
    disableDarkMode();
  }
  console.log(darkMode);
});
