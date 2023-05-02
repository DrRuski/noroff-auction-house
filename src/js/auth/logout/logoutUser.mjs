const logoutBtn = document.querySelector("a#logoutBtn");

export function logoutUser() {
    logoutBtn.addEventListener("click", (e) => {
      localStorage.clear();
      window.location.pathname = "/html/login/index.html"
    });
  }