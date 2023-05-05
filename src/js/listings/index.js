import * as templates from "./templates/renderSetup.mjs";
import { fetchListingsHeader } from "./data/fetchListingsHeader.mjs";
import { apiCall } from "../api/apiCall.mjs";
import {
  apiBase,
  apiAllListings,
  apiSingleListing,
} from "../api/apiEndpoints.mjs";

const getAllListingsURL = `${apiBase}${apiAllListings}?_bids=true&_sellers=true`;
const getSingleListingURL = `${apiBase}${apiSingleListing}13d295be-b617-4ab5-a1f0-ae3b2a928832?_bids=true&_sellers=true`;

export async function renderListings() {
  const listingsData = await apiCall(getAllListingsURL, fetchListingsHeader());
  const listingContainer = document.querySelector("#listingsContainer");
  templates.renderListingItems(listingsData, listingContainer);
}

export async function renderSingleListing() {
  const listingsData = await apiCall(
    getSingleListingURL,
    fetchListingsHeader()
  );
  console.log(listingsData);
  const listingContainer = document.querySelector("#listingsViewContainer");
  templates.renderListingItem(listingsData, listingContainer);
}
