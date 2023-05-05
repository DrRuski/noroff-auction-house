export function listingTemplate(listingData) {
  console.log(listingData);
  const placeholderImage = "../../assets/NFT/placeholderImage.png";
  const listingItem = document.createElement("div");
  listingItem.classList.add("col-6", "col-lg-3");
  listingItem.setAttribute("id", listingData.id);
  listingItem.dataset.id = listingData.id;
  listingItem.innerHTML = `
    <div class="card h-100">
        <div class="d-flex flex-column gap-2 shadow">
            <div>
                <a class="itemLink" href="../item/view/index.html">
                    <img
                    src=""
                    alt=""
                    class="img-fluid card-img lot-image itemImage"
                    />
                </a>
            </div>
            <div class="card-body">
                <a class="itemLink" href="../item/view/index.html">
                    <h3 class="card-title text-white lot-title"></h3>
                    <p class="card-text lot-description"></p>
                </a>
            <div class="d-flex align-items-center gap-2">
                <div>
                <img
                    src="../../assets/Icons/currencyMobileIcon.png"
                    alt=""
                    class="img-fluid"
                />
                </div>
                <p class="nftValue lot-price"></p>
            </div>
            <div class="d-flex align-items-center gap-2">
                <div>
                <img src="../../assets/Icons/timeIcon.png" alt="" class="img-fluid" />
                </div>
                <p class="deadline lot-deadline"></p>
            </div>
            </div>
        </div>
    </div>
    `;
  const itemPriceArray = listingData.bids.map((price) => {
    return price.amount;
  });
  const itemPrice = itemPriceArray.pop();

  if (listingData.media.length > 0) {
    listingItem.querySelector(".lot-image").src = listingData.media;
  } else {
    listingItem.querySelector(".lot-image").src = `${placeholderImage}`;
  }
  listingItem.querySelector(".lot-title").innerText = listingData.title;
  listingItem.querySelector(".lot-description").innerText =
    listingData.description;
  if (!itemPrice) {
    listingItem.querySelector(".lot-price").innerText = `00.00 ,-`;
  } else {
    listingItem.querySelector(".lot-price").innerText = `${itemPrice}.00 ,-`;
  }
  listingItem.querySelector(".lot-deadline").innerText = listingData.endsAt;

  return listingItem;
}

export function renderListingItem(listingData, parent) {
  parent.append(listingTemplate(listingData));
}

export function renderListingItems(listingDataList, parent) {
  parent.append(...listingDataList.map(listingTemplate));
}
