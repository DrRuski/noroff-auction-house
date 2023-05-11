import * as storage from "../../utilities/storage/index.mjs"
import { userProfileNotExist } from "../profile/guestProfile.mjs";

function ownedItemTemplate(listingData) {
    const placeholderImage = "../../assets/NFT/placeholderImage.png";
    const listingItem = document.createElement("div");
    listingItem.classList.add("col-6", "col-lg-3");
    listingItem.setAttribute("id", listingData.id);
    listingItem.dataset.id = listingData.id;
    listingItem.innerHTML = `
    <div class="card h-100">
    <div class="d-flex flex-column gap-2 shadow">
      <div>
        <a class="itemLink" href="../item/sell/index.html">
          <img
            src=""
            alt=""
            class="img-fluid card-img lot-image"
          />
        </a>
      </div>
      <div class="card-body d-flex flex-column gap-2 gap-lg-3">
        <div>
          <a class="itemLink" href="../item/sell/index.html">
            <h3 class="card-title text-white lot-title">WAMEN</h3>
            <p class="card-text lot-description">
              Integer maximus facilisis diam, sit amet suscipit
              massa placerat cursus...
            </p>
          </a>
        </div>
        <div class="d-block">
          <a
            href="../item/sell/index.html"
            class="btn btn-sm btn-secondary border-primary w-100"
            type="button"
          >
            Quick Sell
          </a>
        </div>
      </div>
    </div>
  </div>
      `;
    
  
    if (listingData.media.length > 0) {
      listingItem.querySelector(".lot-image").src = listingData.media;
    } else {
      listingItem.querySelector(".lot-image").src = `${placeholderImage}`;
    }
    listingItem.querySelector(".lot-title").innerText = listingData.title;
    listingItem.querySelector(".lot-description").innerText =
      listingData.description;
  
    return listingItem;
  }

  
  export function renderOwnedListingItems(listingDataList, parent) {
    const profile = JSON.parse(storage.load("userProfile"));
    if (profile) {
      parent.append(...listingDataList.map(ownedItemTemplate));
    } else {
      parent.append(userProfileNotExist());
    }
    
  }
  