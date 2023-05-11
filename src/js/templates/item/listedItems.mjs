function listedItemsTemplate(listingData) {
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
                    class="img-fluid card-img lot-image"/>
                    </div>

                <div class="card-body d-flex flex-column gap-2">
                    <div>
                        <h3 class="card-title text-white lot-title"></h3>
                        <p class="card-text lot-description"></p>
                    </div>

                    <div class="d-flex align-items-center gap-2">
                        <div>
                            <img
                                src="../../assets/Icons/currencyMobileIcon.png"
                                alt=""
                                class="img-fluid"/>
                        </div>
                        <div>
                            <p class="nftValue lot-price"></p>
                        </div>
                    </div>

                    <div class="d-flex align-items-center gap-2">
                        <div>
                            <img
                                src="../../assets/Icons/timeIcon.png"
                                alt=""
                                class="img-fluid"/>
                        </div>
                        <div>
                            <p class="deadline lot-deadline"></p>
                        </div>
                    </div>

                    <div class="d-block">
                        <button 
                        class="btn btn-sm btn-danger border-danger w-100 unListBtn" 
                        id=""
                        >Un-list Item</button>
                    </div>
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
  listingItem.querySelector(".unListBtn").id = listingData.id;
  return listingItem;
}

export function renderListedItems(listingDataList, parent) {
  parent.append(...listingDataList.map(listedItemsTemplate));
}
