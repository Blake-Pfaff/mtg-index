const BASE_URL = "https://api.magicthegathering.io/v1/cards";

export const API = {
  getCards: async () => {
    const url = `${BASE_URL}`;
    const req = await fetch(url);
    const payload = await req.json();
    return payload;
  },
};

export default API;
