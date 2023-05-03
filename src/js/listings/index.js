import { getListings } from "./data/getListings.mjs";
import { renderLotTemplates } from "./template/lot.mjs";

export async function renderLot() {
  const lotData = await getListings();
  if (Array.isArray(lotData)) {
    renderLotTemplates(lotData);
  }
}
