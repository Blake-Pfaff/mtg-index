const BASE_URL = "https://api.magicthegathering.io/v1/cards";

export const API = {
  getCards: async (params) => {
    let url = `${BASE_URL}?page=${params.page || 1}?Page-Size=10"`;
    if (params.name) {
      url = `${url}&name=${params.name}`;
    }
    const req = await fetch(url);
    const payload = await req.json();
    return payload;
  },
};
export default API;
