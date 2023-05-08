import {
  apiAllListings,
  apiBase,
  ownedListings,
} from "../../apiEndpoints/apiEndpoints.mjs";
import * as storage from "../../../utilities/storage/index.mjs";

export async function getListings() {
  try {
    const getAllUrl = `${apiBase}${apiAllListings}?_bids=true&_sellers=true`;
    const response = await fetch(getAllUrl, {
      method: "get",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${storage.load("token")}`,
      },
    });

    return await response.json();
  } catch (error) {
    console.log(error);
  }
}

export async function getOwnedListings() {
  try {
    const profile = JSON.parse(storage.load("userProfile"));
    const ownedListing = `${apiBase}${ownedListings}${profile.name}/listings`;
    const response = await fetch(ownedListing, {
      method: "get",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${storage.load("token")}`,
      },
    });

    return await response.json();
  } catch (error) {
    console.log(error);
  }
}

export async function getListing(url) {
  try {
    const response = await fetch(url, {
      method: "get",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${storage.load("token")}`,
      },
    });

    return await response.json();
  } catch (error) {
    console.log(error);
  }
}
