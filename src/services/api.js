const BASE_URL = "https://api.magicthegathering.io/v1/cards";

export const API = {
  getCards: async (params) => {
    const page = params.page || 1;
    const requestedPageSize = 50;
    let url = `${BASE_URL}?page=${page}&pageSize=${requestedPageSize}`;
    if (params.name) {
      url = `${url}&name=${params.name}`;
    }
    const req = await fetch(url);
    const payload = await req.json();
    const pageSize = Number(req.headers.get("Page-Size"));
    const totalCards = Number(req.headers.get("Total-Count"));
    const lastPage = Math.ceil(totalCards / pageSize);
    return {
      data: payload.cards,
      pagination: {
        pageSize: pageSize,
        currentPage: page,
        total: totalCards,
        lastPage: lastPage,
      },
    };
  },
};

export default API;
