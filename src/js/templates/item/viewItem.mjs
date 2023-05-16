import * as management from "../../listeners/index.mjs";

function itemViewTemplate(listingData) {
  document.querySelector(
    "li#breadcrumbItem"
  ).innerText = `${listingData.title}`;
  const placeholderImage = "../../assets/NFT/placeholderImage.png";
  const listingItem = document.createElement("div");
  listingItem.classList.add("col-lg-8");
  listingItem.setAttribute("id", listingData.id);
  listingItem.dataset.id = listingData.id;
  listingItem.innerHTML = `
  <div class="card h-100">
    <div class="d-flex flex-column flex-lg-row">
      <div>
        <img
          src=""
          alt=""
          class="img-fluid card-img h-100 itemImage lot-image"/>
      </div>

      <div class="card-body d-flex flex-column gap-2">
        <div>
          <h3 class="card-title text-white lot-title"></h3>
          <p class="card-text lot-description"></p>
        </div>

        <div class="d-flex align-items-center gap-2">
          <img
            src=""
            alt=""
            class="img-fluid sellerAvatar"/>
            <span class="sellerName subtext grayText"></span>
        </div>

        <div class="d-flex gap-1">
          <p class="tag"></p>
        </div>

        <div class="d-flex align-items-center gap-2">
          <div>
            <img
              src="../../assets/Icons/timeIcon.png"
              alt=""
              class="img-fluid"/>
          </div>
          <p class="deadline lot-deadline"></p>
        </div>

        <div class="d-flex align-items-center gap-2">
          <div>
            <img
              src="../../assets/Icons/currencyMobileIcon.png"
              alt=""
              class="img-fluid"/>
          </div>
          <p class="nftValue lot-price"></p>
        </div>

        <div>
          <p class="subtext inputItemInfoText">
            You have to bid at least this much:
          </p>
          <form action="submit" class="d-flex flex-column gap-2" id="bidForm">
            <div class="form-floating">
              <input
                type="number"
                id="nftValue"
                class="form-control shadow priceInputField"
                name="amount"
                placeholder=""
                min=""
                required
              />
              <label class="form-label inputLabel" for="nftValue"
                ></label
              >
            </div>
            <button class="d-block btn btn-sm btn-primary w-100 shadow thiccFont">Submit Bid</button>
          </form>
        </div>
        
      </div>
    </div>
  </div>
      `;
  const itemPriceArray = listingData.bids.map((price) => {
    return price.amount;
  });
  const itemPrice = itemPriceArray.pop();
  let userBid = itemPrice + 1;
  //
  document.title = listingData.title;
  //
  if (listingData.media.length > 0) {
    listingItem.querySelector(".lot-image").src = listingData.media;
  } else {
    listingItem.querySelector(".lot-image").src = `${placeholderImage}`;
  }
  //
  listingItem.querySelector(".lot-title").innerText = listingData.title;
  //
  listingItem.querySelector(".lot-description").innerText =
    listingData.description;
  //
  listingItem.querySelector(
    ".sellerName"
  ).innerText = `${listingData.seller.name} - Owner`;
  listingItem.querySelector(".sellerAvatar").src = listingData.seller.avatar;
  //
  listingData.tags.forEach((e) => {
    listingItem.querySelector(".tag").classList.add("subtext", "tagStyle");
    listingItem.querySelector(".tag").innerText = `${e}`;
  });
  //
  if (!itemPrice) {
    listingItem.querySelector(".lot-price").innerText = `00.00 ,-`;
  } else {
    listingItem.querySelector(".lot-price").innerText = `${itemPrice}.00 ,-`;
  }
  //
  listingItem.querySelector(".lot-deadline").innerText = listingData.endsAt;
  //
  if (itemPrice) {
    listingItem.querySelector(
      ".priceInputField"
    ).placeholder = `${userBid}.00 ,-`;
    listingItem.querySelector(".inputLabel").innerText = `${userBid}.00 ,-`;
    listingItem.querySelector(".priceInputField").min = `${userBid}`;
  } else {
    listingItem.querySelector(".priceInputField").placeholder = `01.00 ,-`;
    listingItem.querySelector(".inputLabel").innerText = `01.00 ,-`;
  }
  //
  management.userBid(listingItem, listingData.id);
  //
  return listingItem;
}

export function renderListingItem(listingData, parent) {
  parent.append(itemViewTemplate(listingData));
}
