const toggleBtn = document.getElementById("toggleBtn");
const moreSkills = document.getElementById("moreSkills");

let isVisible = false;

toggleBtn.addEventListener("click", () => {
  isVisible = !isVisible;
  moreSkills.classList.toggle("more-skills", isVisible);
  moreSkills.hidden = !isVisible;
  moreSkills.style.display = isVisible ? "block" : "none";
  toggleBtn.textContent = isVisible ? "Show Less" : "Show More";
});