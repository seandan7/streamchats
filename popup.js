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
    var node = document.createElement("div");
    node.classList += "messages__message";
    //  TODO: ADD IS SELF MESSAGE TO DB,IF SELF PARAMETER, ADD SELF CLASS
    var subNodeName = document.createElement("div");
    subNodeName.classList += "message__name";
    var subNodeText = document.createTextNode(item.name);
    subNodeName.appendChild(subNodeText);

    var subNodeMessage = document.createElement("div");
    subNodeMessage.classList += "message__text saved";
    var subNodeMessageText = document.createTextNode(item.message);
    subNodeMessage.appendChild(subNodeMessageText);
    // TODO: ADD UNSAVE BUTTON
    node.appendChild(subNodeName);
    node.appendChild(subNodeMessage);

    document.querySelector(".main__messages").append(node);
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
