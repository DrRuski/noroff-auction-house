import { logoutUser } from "./auth/logout/logoutUser.mjs";
import { renderLot } from "./listings/index.js";

const path = location.pathname;

if (path === "/html/home/index.html") {
  renderLot();
}

logoutUser();
