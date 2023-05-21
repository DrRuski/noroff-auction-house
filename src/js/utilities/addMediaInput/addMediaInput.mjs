export function addMedia() {
  const addMediaInput = document.querySelector("#add-media-input");
  const mediaInputContainer = document.querySelector(
    "div#media-input-container"
  );
  addMediaInput.addEventListener("click", (e) => {
    e.preventDefault();
    mediaInputContainer.innerHTML += `
    <input
      name="media"
      type="url"
      class="form-control pictureInput"
      id="pictureInput"
      placeholder="Item URL"
      required
     />
    `;
  });
}
