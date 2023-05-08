import * as listings from "../../api/listings/index.mjs";
import * as templates from "../../templates/index.js";

export async function renderHome() {
    const allListings = await listings.getListings();
    const container = document.querySelector("#listingsContainer");
    templates.renderListingItems(allListings, container);
  }