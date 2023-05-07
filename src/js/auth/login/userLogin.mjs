import { apiBase, apiAuthLogin } from "../../api/apiEndpoints/apiEndpoints.mjs";
import { loginSuccess } from "./form.mjs";
import { save } from "../../utilities/storage/save.mjs";

export async function userLogin(email, password) {
  try {
    const response = await fetch(`${apiBase}${apiAuthLogin}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    if (response.ok) {
      const profile = await response.json();
      save("token", profile.accessToken);
      delete profile.accessToken;
      save("userProfile", profile);
      loginSuccess();
      setTimeout(() => {
        window.location.pathname = "/html/home/index.html";
      }, 1000);
      return profile;
    } else {
      throw new Error(response.statusText);
    }
  } catch (error) {
    alert("There was an issue, refresh and try again");
  }
}
