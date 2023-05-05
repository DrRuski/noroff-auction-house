import { apiBase, apiAllListings } from "../../api/api.mjs";
import { load } from "../../storage/load.mjs";

export async function fetchListings() {
  try {
    const response = await fetch(`${apiBase}${apiAllListings}?_bids=true&_seller=true`, {
      method: "GET",
      headers: {
        "Content-Type": "application.json",
        Authorization: `Bearer ${load("token")}`,
      },
    });
    return await response.json();
  } catch (error) {
    console.log(error);
  }
}
