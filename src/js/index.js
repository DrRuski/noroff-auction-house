import * as listings from "./api/listings/index.mjs";
import * as management from "./listeners/index.mjs";
import * as templates from "./templates/index.js";

async function renderCollection() {
  const allListings = await listings.getOwnedListings();
  const container = document.querySelector("#ownedItemsContainer");
  templates.renderOwnedListingItems(allListings, container);
}
async function renderHome() {
  const allListings = await listings.getListings();
  const container = document.querySelector("#listingsContainer");
  templates.renderListingItems(allListings, container);
}

switch (window.location.pathname) {
  case "/html/login/index.html":
  case "/html/login/":
  case "/html/login":
    management.loginListener();
    break;
  case "/html/registration/index.html":
  case "/html/registration/":
  case "/html/registration":
    management.regisListener();
    break;
  case "/html/home/index.html":
  case "/html/home/":
  case "/html/home":
    renderHome();
    break;
  case "/html/collection/index.html":
  case "/html/collection/":
  case "/html/collection":
    renderCollection();
    break;
  case "/html/profile/index.html":
  case "/html/profile/":
  case "/html/profile":
    templates.renderUserProfile();
    break;
  case "/html/item/sell/index.html":
  case "/html/item/sell/":
  case "/html/item/sell":
    management.createListingItem();
    break;
  case "/html/profile/edit/index.html":
  case "/html/profile/edit/":
  case "/html/profile/edit":
    management.updateProfile();
    break;
}
if (
  window.location.pathname !== "/html/login/index.html" &&
  window.location.pathname !== "/html/registration/index.html"
) {
  management.userCurrencyDisplay();
  management.logoutUser();
}
