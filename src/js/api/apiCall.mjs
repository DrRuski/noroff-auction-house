export async function apiCall(url, options) {
    try {
      const response = await fetch(url, options);
      return await response.json();
    } catch (error) {
      console.log(error);
    }
  }