import * as utilities from "./utilities/storage/index.mjs";
import * as management from "./listeners/index.mjs";
import * as templates from "./templates/index.js";
import * as render from "./setupRender/index.mjs";
const siteFolder = "/noroff-auction-house";

switch (window.location.pathname) {
  case `${siteFolder}/login/index.html`:
  case `${siteFolder}/login/`:
  case `${siteFolder}/login`:
    management.loginListener();
    break;
  case `${siteFolder}/registration/index.html`:
  case `${siteFolder}/registration/`:
  case `${siteFolder}/registration`:
    management.regisListener();
    break;
  case `${siteFolder}/home/index.html`:
  case `${siteFolder}/home/`:
  case `${siteFolder}/home`:
    render.renderHome();
    break;
  case `${siteFolder}/collection/index.html`:
  case `${siteFolder}/collection/`:
  case `${siteFolder}/collection`:
    render.renderOwnedCollection();
    render.renderYourBidsCollection();
    render.renderListedItemsCollection();
    break;
  case `${siteFolder}/profile/index.html`:
  case `${siteFolder}/profile/`:
  case `${siteFolder}/profile`:
    templates.renderUserProfile();
    break;
  case `${siteFolder}/item/sell/index.html`:
  case `${siteFolder}/item/sell/`:
  case `${siteFolder}/item/sell`:
    management.createListingItem();
    break;
  case `${siteFolder}/profile/edit/index.html`:
  case `${siteFolder}/profile/edit/`:
  case `${siteFolder}/profile/edit`:
    management.updateProfile();
    break;
  case `${siteFolder}/item/view/index.html`:
  case `${siteFolder}/item/view/`:
  case `${siteFolder}/item/view`:
    render.renderSingleItem();
    break;
}
if (
  window.location.pathname !== `${siteFolder}/login/index.html` &&
  window.location.pathname !== `${siteFolder}/registration/index.html`
) {
  utilities.navbarResizing();
  management.userCurrencyDisplay();
  management.logoutUser();
}
