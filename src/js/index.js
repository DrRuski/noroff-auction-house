import { renderListings, renderSingleListing } from "./listings/index.js";
import { logoutUser } from "./auth/logout/logoutUser.mjs";

const path = location.pathname;

if (path === "/html/home/index.html") {
  renderListings();
}

if (path === "/html/item/view/index.html") {
  renderSingleListing();
}

logoutUser();
