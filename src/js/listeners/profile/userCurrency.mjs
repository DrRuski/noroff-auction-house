import * as storage from "../../utilities/storage/index.mjs";
const userCurrency = document.querySelectorAll(".userCurrency");


export function userCurrencyDisplay() {
  const userProfile = JSON.parse(storage.load("userProfile"));
  console.log(JSON.stringify(userProfile.credits));
  userCurrency.forEach((e) => {
    return e.innerHTML = JSON.stringify(userProfile.credits);
  })
}
