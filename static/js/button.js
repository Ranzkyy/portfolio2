function message_save() {
  let name = $("#name").val();
  let email = $("#email").val();
  let message = $("#msg").val();
  $.ajax({
    type: "POST",
    url: "/contact",
    data: {
      name_give: name,
      email_give: email,
      msg_give: message,
    },
    success: function (response) {
      alert(response["msg"]);
      window.location.reload();
    },
  });
}
