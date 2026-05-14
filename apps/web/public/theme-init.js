(() => {
  try {
    const d = localStorage.getItem("maison.dark");
    document.documentElement.dataset.theme = d === "1" ? "dark" : "light";
  } catch {
    document.documentElement.dataset.theme = "light";
  }
})();
