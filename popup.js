let saveButton = document.querySelectorAll(".message__save");

saveButton.forEach((item) => {
  item.addEventListener("click", (event) => {
    var messageToSave = event.currentTarget.parentNode.querySelector(
      ".message__text"
    ).innerHTML;
    var messageToSaveSender = event.currentTarget.parentNode.querySelector(
      ".message__name"
    ).innerHTML;
    var data = {
      name: messageToSaveSender,
      message: messageToSave,
    };
    fetch("http://localhost:4000/api/newMessage", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((response) => {
      console.log(response);
    });
    event.currentTarget.parentNode.querySelector(".message__text").classList +=
      " saved";
  });
});
