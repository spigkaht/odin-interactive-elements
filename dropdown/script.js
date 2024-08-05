const dropdownBtn = document.querySelector("#dropdownBtn");

dropdownBtn.addEventListener("click", (e) => {
  const dropdown = document.querySelector("#dropdown");
  dropdown.classList.toggle("opaque");
});
