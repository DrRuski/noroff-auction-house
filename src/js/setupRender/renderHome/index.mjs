import * as listings from "../../api/listings/index.mjs";
import * as templates from "../../templates/index.js";
import * as search from "../../utilities/search/index.mjs";

export async function renderHome() {
  const allListings = await listings.getListings();
  const searchForm = document.querySelector("input#searchInput");
  const container = document.querySelector("#listingsContainer");
  templates.renderListingItems(allListings, container);
  //
  searchForm.addEventListener("input", onSearch);
  //
  function onSearch(e) {
    e.preventDefault();
    const searchTerm = e.target.value;
    const term = searchTerm.toLowerCase();
    if (!term.length) {
      container.innerHTML = "";
      return templates.renderListingItems(allListings, container);
    }
    //
    if (term.length < 3) {
      return;
    }
    //
    container.innerHTML = "";
    //
    if (search.getSearchTerms(allListings, term).length) {
      return templates.renderListingItems(
        search.getSearchTerms(allListings, term),
        container
      );
    } else {
      return search.listingNotFound(container);
    }
  }
}
