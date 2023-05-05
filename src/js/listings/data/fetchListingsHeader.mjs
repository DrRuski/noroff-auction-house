import { load } from "../../storage/load.mjs";
export function fetchListingsHeader() {
  return {
    method: "GET",
    headers: {
      "Content-Type": "application.json",
      Authorization: `Bearer ${load("token")}`,
    },
  }
}
