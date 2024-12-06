const getFormValues = () => {
  console.log("HERE");
  const form = document.getElementById("contactForm");

  const payload = {
    yourName: form.elements["name"].value,
    email: form.elements["email"].value,
    yourWesbite: form.elements["website"].value,
    yourMessage: form.elements["message"].value,
  };

  var emailRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  if (payload?.email?.length > 0) {
    if (payload.email.match(emailRegex)) {
      form.elements["email"].classList.remove("error");
      console.log("here");
    } else {
      form.elements["email"].classList.add("error");
      console.log("else");
    }
  }

  console.log(payload);
  return false;
};

const handleMenu = () => {
  const menu = document.getElementById("menu");

  if (menu?.checkVisibility()) {
    console.log("IF");
    menu?.classList?.remove("showMenu");
  } else {
    console.log("ELSE");
    menu?.classList?.add("showMenu");
  }
};
