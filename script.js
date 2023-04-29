const grids = document.querySelectorAll(".parent > div");

grids.forEach(grid => {
  grid.addEventListener("mouseover", (event) => {
    grid.classList.add("hovered");
    grid.style.transitionProperty = "opacity"
    grid.style.transitionDuration = "1s";
    grid.style.transitionTimingFunction = "ease"
  });

  grid.addEventListener("mouseout", (event) => {
    grid.classList.remove("hovered");
    grid.style.transitionProperty = "opacity"
    grid.style.transitionDuration = "1s";
    grid.style.transitionTimingFunction = "ease"
  });
});
