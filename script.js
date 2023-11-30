function toggleLanguage() {
  var language = document.getElementById("myLanguage");
  language.style.display =
    language.style.display === "none" || language.style.display === ""
      ? "block"
      : "none";
}
function toggleModal() {
  var modal = document.getElementById("myModals");
  var btnIcon = document.getElementById("btnIcon");

  if (modal.style.display === "none" || modal.style.display === "") {
    modal.style.display = "block";
    btnIcon.src = "./public/image/close-modal.svg";
  } else {
    modal.style.display = "none";
    btnIcon.src = "./public/image/open-modal.svg";
  }
}
