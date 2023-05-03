import { apiBase, apiAllListings } from "../../api/api.mjs";
import { load } from "../../storage/load.mjs";

export async function getListings(limit = 30) {
  try {
    const response = await fetch(`${apiBase}${apiAllListings}?limit=${limit}&_bids=true`, {
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
