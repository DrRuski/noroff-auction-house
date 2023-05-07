import * as listings from "./api/listings/index.mjs";
import * as templates from "./templates/index.js";
import { logoutUser } from "./auth/logout/logoutUser.mjs";

async function testRender() {
  const allListings = await listings.getListings();
  const container = document.querySelector("#listingsContainer");
  templates.renderListingItems(allListings, container);
}

testRender();
logoutUser();
