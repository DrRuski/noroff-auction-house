import { listingTemplate } from "./item.mjs";
import { listingViewTemplate } from "./itemView.mjs";

export function renderListingItem(listingData, parent) {
  parent.append(listingViewTemplate(listingData));
}

export function renderListingItems(listingDataList, parent) {
  parent.append(...listingDataList.map(listingTemplate));
}
