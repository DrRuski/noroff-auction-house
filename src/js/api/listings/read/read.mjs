import {
  apiAllListings,
  apiBase,
  apiSingleListing,
} from "../../apiEndpoints/apiEndpoints.mjs";
import { load } from "../../../utilities/storage/load/load.mjs";

export async function getListings() {
  try {
    const getAllUrl = `${apiBase}${apiAllListings}?_bids=true&_sellers=true`;
    const response = await fetch(getAllUrl, {
      method: "get",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${load("token")}`,
      },
    });

    const json = await response.json();
    // console.log(json);
    return json;
  } catch (error) {
    console.log(error);
  }
}

export async function getListing(id) {
  try {
    const getSingleUrl = `${apiBase}${apiSingleListing}${id}?_bids=true&_sellers=true`;
    const response = await fetch(getSingleUrl, {
      method: "get",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${load("token")}`,
      },
    });
    const json = await response.json();
    console.log(json);
    return json;
  } catch (error) {
    console.log(error);
  }
}
