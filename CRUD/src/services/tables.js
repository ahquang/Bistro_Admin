const baseURL = `${process.env.REACT_APP_BASE_URL}/tables`
export const getTableListAPI = async () => {
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
  
  export const deleteTableAPI = async (id) => {
    const requestOptions = {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    };
    await fetch(`${baseURL}/${id}`, requestOptions);
  };
  
  export const postTableAPI = async (data) => {
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
  
  export const updateTableAPI = async (data, id) => {
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
  
  export const getTableDetailAPI = async (id) => {
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
  