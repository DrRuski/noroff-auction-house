import { createListing } from "../../api/listings/index.mjs";

export function createListingItem() {
  const createForm = document.querySelector("form#itemInformationForm");

  if (createForm) {
    createForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const createForm = e.target;
      const formData = new FormData(createForm);
      const mediaFiles = formData.getAll("media"); // Get all media files as an array
      const listing = Object.fromEntries(formData.entries());
      listing.media = mediaFiles; // Add media files array to the listing object
      createListing(listing);
    });
  }
}
