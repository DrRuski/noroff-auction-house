import { getListings } from "./data/getListings.mjs";
import { lotTemplate } from "./template/lot.mjs";

export async function renderLot() {
  const lotData = await getListings();
  lotTemplate(lotData);
}
