import { BASE_URL_ORDERS } from "../constants";
const baseUrl = `${BASE_URL_ORDERS}/orders`

export const getOrderListAPI = async () => {
  const requestOptions = {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  };
  try {
    const res = await fetch(baseUrl, requestOptions)
    const data = await res.json()
    return data;
  } catch(e) {
    console.log(e);
  }
};

export const deleteOrderAPI = async (id) => {
  const requestOptions = {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
  };
  await fetch(`${baseUrl}/${id}`, requestOptions);
};

export const postOrderAPI = async (data) => {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  };
  await fetch(baseUrl, requestOptions)
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.log(error));
};

export const updateOrderAPI = async (data, id) => {
  const requestOptions = {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  };
  await fetch(`${baseUrl}/${id}`, requestOptions)
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.log(error));
};

export const getOrderDetailAPI = async (id) => {
  const requestOptions = {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  };
  try {
    const res = await fetch(`${baseUrl}/${id}`, requestOptions)
    const data = await res.json()
    return data;
  } catch(e) {
    console.log(e);
  }
};
