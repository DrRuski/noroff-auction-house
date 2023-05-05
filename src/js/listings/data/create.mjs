import { load } from "../../storage/load.mjs";
export function createListing() {
  return {
    method: "POST",
    headers: {
      "Content-Type": "application.json",
      Authorization: `Bearer ${load("token")}`,
    },
    body: JSON.stringify()
  }
}