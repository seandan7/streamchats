/** Get Saved Message On Load */
fetch("http://localhost:4000/api/savedMessages")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    showResponseAsMessages(data);
  });

function showResponseAsMessages(arr) {
  arr.forEach((item) => {
    let newMessage = `<div class="messages__message self">
      <span class="message__name">${item.name}: </span>
      <span class="message__text saved">${item.message}</span>
      <span class="message__save">Save Message</span>
    </div>`;
    document.querySelector(".main__messages").append(newMessage);
  });
}
/** Save Message Details to MySQL upon Save Button Click */
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
