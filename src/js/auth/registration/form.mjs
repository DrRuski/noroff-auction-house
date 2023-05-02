import { userRegistration } from "./userRegis.mjs";

const regisBtn = document.querySelector("button#regisConfirmBtn");
const regisForm = document.querySelector("form#registrationForm");

regisBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const formData = new FormData(regisForm);
  const userData = Object.fromEntries(formData.entries());
  const { username, email, password } = userData;
  userRegistration(username, email, password);
});
