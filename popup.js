let saveButton = document.querySelectorAll(".message__save");

saveButton.forEach((item) => {
  item.addEventListener("click", (event) => {
    var messageToSave = event.currentTarget.parentNode.querySelector(
      ".message__text"
    ).innerHTML;
  });
});
