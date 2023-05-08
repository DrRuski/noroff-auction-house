import { updateUserProfile } from "../../api/listings/index.mjs";

export function updateProfile() {
  const updateForm = document.querySelector("form#updateUserInformation");

  if (updateForm) {
    updateForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const updateForm = e.target;
      const formData = new FormData(updateForm);
      const avatar = Object.fromEntries(formData.entries());
      updateUserProfile(avatar);
      setTimeout(() => {
        window.location.pathname = "/html/profile/index.html";
      }, 1000);
    });
  }
}
