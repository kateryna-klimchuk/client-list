export const fetchClientData = (page, size) =>
  fetch(
    `https://hiring-api.simbuka.workers.dev/?page=${page}&size=${size}`
  ).then((response) => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
