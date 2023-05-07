import { load } from "../../../utilities/storage/load.mjs";
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
      Authorization: `Bearer ${load("token")}`,
    },
    body: JSON.stringify(listingData),
  });

  return await response.json();
}

export async function updateUserProfile(userInfo) {
  const updateMedia = `${userInfo}/media`;
  const response = await fetch(`${apiBase}${updateProfile}${updateMedia}`, {
    method: "put",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${load("token")}`,
    },
    body: JSON.stringify(userInfo),
  });

  return await response.json();
}
