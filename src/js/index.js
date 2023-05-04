import { logoutUser } from "./auth/logout/logoutUser.mjs";
import { fetchListings } from "./listings/data/fetchListings.mjs";
// import { renderListingItem } from "./listings/index.js";
import * as templates from "./listings/index.js";

logoutUser();

async function testRendering() {
  const listings = await fetchListings();
  const listingContainer = document.querySelector("#listingsContainer");
  templates.renderListingItems(listings, listingContainer);
}

testRendering();
