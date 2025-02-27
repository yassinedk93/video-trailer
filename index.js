const watchButton = document.getElementById("watch-button");
const closeIcon = document.getElementsByClassName("close-icon")[0];
const trailerContainer = document.getElementsByClassName("trailer-container")[0];

watchButton.addEventListener("click", () => {
  trailerContainer.classList.remove("active");
});

closeIcon.addEventListener("click", ()=>{
  trailerContainer.classList.add("active");
}
)
