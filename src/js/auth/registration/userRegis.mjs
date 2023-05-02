import { apiBase, apiAuthRegis } from "../../api/api.mjs";

export async function userRegistration(name, email, password) {
  try {
    const response = await fetch(`${apiBase}${apiAuthRegis}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password }),
    });

    if (response.ok) {
      setTimeout(() => {
        window.location.pathname = "login/index.html";
      }, 1000);
      return await response.json();
    } else {
      throw new Error(response.statusText);
    }
  } catch (error) {alert("There was an issue, refresh and try again")}
}
