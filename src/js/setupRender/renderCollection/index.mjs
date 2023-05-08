import * as listings from "../../api/listings/index.mjs";
import * as templates from "../../templates/index.js";

export async function renderCollection() {
    const allListings = await listings.getOwnedListings();
    const container = document.querySelector("#ownedItemsContainer");
    templates.renderOwnedListingItems(allListings, container);
  }