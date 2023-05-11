import { updateUserProfile } from "../../api/listings/index.mjs";

export function updateProfile() {
  const updateForm = document.querySelector("form#updateUserInformation");

  if (updateForm) {
    updateForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const updateForm = e.target;
      const formData = new FormData(updateForm);
      const avatarUrl = formData.get("avatar");
      const avatar = { url: avatarUrl };
      updateUserProfile(avatar).then(() => {
        setTimeout(() => {
          window.location.pathname = "/html/profile/index.html";
        }, 1000);
      });
    });
  }
}
