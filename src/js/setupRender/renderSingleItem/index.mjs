import * as listings from "../../api/listings/index.mjs";
import * as templates from "../../templates/index.js";
import { getId } from "../../utilities/ID/getID.mjs";

export async function renderSingleItem() {
  const newUrl = getId();
  const singleItem = await listings.getListing(newUrl);
  const container = document.querySelector("div#listingsViewContainer");
  templates.renderListingItem(singleItem, container);
}
