import * as storage from "../../../utilities/storage/index.mjs"
import {
  apiBase,
  listingBid,
  updateProfile,
} from "../../apiEndpoints/apiEndpoints.mjs";

export async function binOnListing(listingData) {
  const listingIdURL = `${listingData.id}/bids`;
  const response = await fetch(`${apiBase}${listingBid}${listingIdURL}`, {
    method: "put",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${storage.load("token")}`,
    },
    body: JSON.stringify(listingData),
  });

  return await response.json();
}

export async function updateUserProfile(avatar) {
  const userProfile = JSON.parse(storage.load("userProfile"));
  const userName = userProfile.name;
  console.log(userName);
  const response = await fetch(`${apiBase}${updateProfile}${userName}/media`, {
    method: "put",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${storage.load("token")}`,
    },
    body: JSON.stringify(avatar),
  });

  return await response.json();
}
