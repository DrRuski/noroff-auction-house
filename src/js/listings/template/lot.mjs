export function lotTemplate(lotData) {
  console.log(lotData);
  const lotWrapper = document.querySelector(".lotWrapper");
  const lotContainer = document.createElement("div");
  lotContainer.setAttribute("id", lotData.id);
  lotContainer.classList.add("col-6", "col-lg-3");
  lotContainer.dataset.id = lotData.id;
  lotWrapper.appendChild(lotContainer);
  lotContainer.innerHTML = `<div class="card h-100">
    <div class="d-flex flex-column gap-2 shadow">
      <div>
        <a class="itemLink" href="../item/view/index.html">
          <img
            src="../../assets/NFT/nftONE.png"
            alt=""
            class="img-fluid card-img"
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
  </div>`;

//   lotContainer.querySelector(".lot-image").src = lotData.media;
//   lotContainer.querySelector(".lot-title").innerText = lotData.title;
//   lotContainer.querySelector(".lot-description").innerText = lotData.description;
//   lotContainer.querySelector(".lot-price").innerText = lotData.bids.amount;
//   lotContainer.querySelector(".lot-deadline").innerText = lotData.endsAt;
}
