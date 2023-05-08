import * as storage from "../../utilities/storage/index.mjs";

export function userProfile() {
  const placeholderImage = "../../assets/NFT/placeholderImage.png";
  const profile = JSON.parse(storage.load("userProfile"));
  console.log(profile);
  const userPage = document.createElement("div");
  userPage.classList.add("row", "col-lg-4", "m-auto", "mt-2", "mt-lg-3", "gap-3");
  userPage.innerHTML = `
    <div class="d-flex justify-content-end">
    <a
      class="btn btn-sm btn-secondary border-primary"
      type="button"
      href="./edit/index.html"
    >
      Edit <i class="fa-solid fa-gear"></i>
    </a>
  </div>

  <div>
    <img
      src=""
      alt=""
      class="img-fluid userAvatar"
    />
  </div>

  <div class="userName text-center">
    <h2 class="nameText"></h2>
  </div>

  <hr class="border border-primary border-1 opacity-25 my-2" />

  <div class="userDescription">
    <p class="descriptionText">
      I am a handsome little testing account that searches for the meaning of life and all things there of.
    </p>
  </div>
      `;
  if (profile.avatar) {
    userPage.querySelector(".userAvatar").src = profile.avatar;
  } else {
    userPage.querySelector(".userAvatar").src = `${placeholderImage}`;
  }

  userPage.querySelector(".nameText").innerText = profile.name;

  return userPage;
}

export function renderUserProfile(userData) {
  const userContainer = document.querySelector("div#userPage");
  userContainer.append(userProfile(userData));
}
