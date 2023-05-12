import * as utilities from "./utilities/storage/index.mjs";
import * as management from "./listeners/index.mjs";
import * as templates from "./templates/index.js";
import * as render from "./setupRender/index.mjs";

switch (window.location.pathname) {
  case "/html/login/index.html":
  case "/html/login/":
  case "/html/login":
    management.loginListener();
    break;
  case "/html/registration/index.html":
  case "/html/registration/":
  case "/html/registration":
    management.regisListener();
    break;
  case "/html/home/index.html":
  case "/html/home/":
  case "/html/home":
    render.renderHome();
    break;
  case "/html/collection/index.html":
  case "/html/collection/":
  case "/html/collection":
    render.renderOwnedCollection();
    render.renderYourBidsCollection();
    render.renderListedItemsCollection();
    break;
  case "/html/profile/index.html":
  case "/html/profile/":
  case "/html/profile":
    templates.renderUserProfile();
    break;
  case "/html/item/sell/index.html":
  case "/html/item/sell/":
  case "/html/item/sell":
    management.createListingItem();
    break;
  case "/html/profile/edit/index.html":
  case "/html/profile/edit/":
  case "/html/profile/edit":
    management.updateProfile();
    break;
  case "/html/item/view/index.html":
  case "/html/item/view/":
  case "/html/item/view":
    render.renderSingleItem();

    break;
}
if (
  window.location.pathname !== "/html/login/index.html" &&
  window.location.pathname !== "/html/registration/index.html"
) {
  utilities.navbarResizing();
  management.userCurrencyDisplay();
  management.logoutUser();
}
