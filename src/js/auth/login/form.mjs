import { userLogin } from "./userLogin.mjs";
const loginForm = document.querySelector("form#loginForm");
const loginBtn = document.querySelector("button#loginBtn");

loginBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const formData = new FormData(loginForm);
    const userData = Object.fromEntries(formData.entries());
    const { email, password } = userData;
    userLogin(email, password);
  });
  
  export function loginSuccess() {
    loginBtn.style.border = "none";
    loginBtn.style.backgroundColor = `#61BF73`;
    loginBtn.innerText = `Redirecting...`
}