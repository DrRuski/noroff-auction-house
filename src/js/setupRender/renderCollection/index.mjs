import {
  apiBase,
  ownedListings,
} from "../../api/apiEndpoints/apiEndpoints.mjs";
import * as listings from "../../api/listings/index.mjs";
import * as templates from "../../templates/index.js";
import * as storage from "../../utilities/storage/index.mjs";

const profile = JSON.parse(storage.load("userProfile"));
const ownedListingURL = `${apiBase}${ownedListings}${profile.name}/listings?_listings=true&_bids=true&_seller=true`;
const yourBidsURL = `${apiBase}${ownedListings}${profile.name}/bids?_listings=true&_bids=true&_seller=true`;
const listedItemsURL = `${apiBase}${ownedListings}${profile.name}/listings?_bids=true&_seller=true`;

export async function renderOwnedCollection() {
  const allListings = await listings.getListings(ownedListingURL);
  const container = document.querySelector("div#ownedItemsContainer");
  templates.renderOwnedListingItems(allListings, container);
}

export async function renderYourBidsCollection() {
  const allListings = await listings.getListings(yourBidsURL);
  const container = document.querySelector("div#yourBidsContainer");
  templates.renderYourBidsItems(allListings, container);
}

export async function renderListedItemsCollection() {
  const allListings = await listings.getListings(listedItemsURL);
  const container = document.querySelector("div#listedItemsContainer");
  templates.renderListedItems(allListings, container);
}
