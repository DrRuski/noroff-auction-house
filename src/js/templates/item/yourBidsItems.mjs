function yourBidsTemplate(listingData) {
  const itemData = listingData.listing;
  const placeholderImage = "../../assets/NFT/placeholderImage.png";
  const listingItem = document.createElement("div");
  listingItem.classList.add("col-6", "col-lg-3");
  listingItem.setAttribute("id", listingData.id);
  listingItem.dataset.id = listingData.id;
  listingItem.innerHTML = `
    <div class="card h-100">
                  <div class="d-flex flex-column gap-2 shadow">
                    <div>
                      <img
                        src="../../assets/NFT/nftONE.png"
                        alt=""
                        class="img-fluid card-img lot-image"
                      />
                    </div>
                    <div class="card-body">
                      <div>
                        <h3 class="card-title text-white lot-title"></h3>
                        <p class="card-text lot-description">
                        </p>
                      </div>
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
                          <img
                            src="../../assets/Icons/timeIcon.png"
                            alt=""
                            class="img-fluid"
                          />
                        </div>
                        <p class="deadline lot-deadline"></p>
                      </div>
                    </div>
                  </div>
                </div>
      `;


  const itemPriceArray = listingData.amount;

  if (itemData.media.length > 0) {
    listingItem.querySelector(".lot-image").src = itemData.media;
  } else {
    listingItem.querySelector(".lot-image").src = `${placeholderImage}`;
  }
  listingItem.querySelector(".lot-title").innerText = itemData.title;
  listingItem.querySelector(".lot-description").innerText =
  itemData.description;
  if (!itemPriceArray) {
    listingItem.querySelector(".lot-price").innerText = `00.00 ,-`;
  } else {
    listingItem.querySelector(".lot-price").innerText = `${itemPriceArray}.00 ,-`;
  }
  listingItem.querySelector(".lot-deadline").innerText = itemData.endsAt;

  return listingItem;
}

export function renderYourBidsItems(listingDataList, parent) {
  parent.append(...listingDataList.map(yourBidsTemplate));
}
