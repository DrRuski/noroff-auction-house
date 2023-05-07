import * as listings from "./api/listings/index.mjs";
import * as management from "./listeners/index.mjs";
import * as templates from "./templates/index.js";
import { logoutUser } from "./auth/logout/logoutUser.mjs";

async function renderCollection() {
  const allListings = await listings.getListings();
  const container = document.querySelector("#ownedItemsContainer");
  templates.renderOwnedListingItems(allListings, container);
}
async function renderHome() {
  const allListings = await listings.getListings();
  const container = document.querySelector("#listingsContainer");
  templates.renderListingItems(allListings, container);
}

switch (window.location.pathname) {
  case "/html/home/index.html":
    renderHome();
    break;
  case "/html/collection/index.html":
    renderCollection();
    break;
  case "/html/item/sell/index.html":
    management.createListingItem();
    break;
  case "/html/profile/edit/index.html":
    management.updateProfile();
    break;
}

logoutUser();
