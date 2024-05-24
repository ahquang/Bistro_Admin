import { BASE_URL_CONTACT } from "../constants";
const baseURL = `${BASE_URL_CONTACT}/contacts`;

export const getContactListAPI = async () => {
    const requestOptions = {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    };
    try {
      const res = await fetch(baseURL, requestOptions)
      const data = await res.json()
      return data;
    } catch(e) {
      console.log(e);
    }
  };
  
  export const deleteContactAPI = async (id) => {
    const requestOptions = {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    };
    await fetch(`${baseURL}/${id}`, requestOptions);
  };
  
  export const postContactAPI = async (data) => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    };
    await fetch(baseURL, requestOptions)
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.log(error));
  };
  
  export const updateContactAPI = async (data, id) => {
    const requestOptions = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    };
    await fetch(`${baseURL}/${id}`, requestOptions)
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.log(error));
  };
  
  export const getContactDetailAPI = async (id) => {
    const requestOptions = {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    };
    try {
      const res = await fetch(`${baseURL}/${id}`, requestOptions)
      const data = await res.json()
      return data;
    } catch(e) {
      console.log(e);
    }
  };
  