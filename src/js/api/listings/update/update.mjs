import * as storage from "../../../utilities/storage/index.mjs";

import {
  apiBase,
  listingBid,
  updateProfile,
} from "../../apiEndpoints/apiEndpoints.mjs";

export async function bidOnListing(listingData) {
  try {
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
  } catch (error) {
    console.log(error);
  }
}

export async function updateUserProfile(avatar) {
  try {
    const userProfile = JSON.parse(storage.load("userProfile"));

    if (userProfile.avatar) {
      delete userProfile.avatar;
    }
    const response = await fetch(
      `${apiBase}${updateProfile}${userProfile.name}/media`,
      {
        method: "put",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${storage.load("token")}`,
        },
        body: JSON.stringify(avatar),
      }
    );
    if (response.ok) {
      userProfile.avatar = avatar.url;
      storage.save("userProfile", JSON.stringify(userProfile));
      const json = await response.json();
      console.log(json);
      return json;
    }
  } catch (error) {
    console.log(error);
  }
}