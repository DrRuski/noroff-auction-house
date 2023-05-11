import * as storage from "../../utilities/storage/index.mjs";
import { userProfileNotExist } from "./guestProfile.mjs";

function userProfileExist(userData) {
  console.log(userData);
  document.title = userData.name;
  const placeholderImage = "../../assets/NFT/placeholderImage.png";
  const userPage = document.createElement("div");
  userPage.classList.add(
    "row",
    "col-lg-4",
    "mx-lg-auto",
    "my-3",
    "gap-3",
    "main-content"
  );
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

  <div class="d-flex flex-column">
    <img
      src=""
      alt=""
      class="img-fluid userAvatar rounded-2"
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
  if (userData.avatar) {
    userPage.querySelector(".userAvatar").src = userData.avatar;
  } else {
    userPage.querySelector(".userAvatar").src = `${placeholderImage}`;
  }
  userPage.querySelector(".nameText").innerText = userData.name;

  return userPage;
}

export function renderUserProfile() {
  const userContainer = document.querySelector("div#userPage");
  const profile = JSON.parse(storage.load("userProfile"));
  console.log(profile);
  if (profile) {
    userContainer.append(userProfileExist(profile));
  } else {
    userContainer.append(userProfileNotExist());
  }
}
