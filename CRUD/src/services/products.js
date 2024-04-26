const baseUrl = `${process.env.REACT_APP_BASE_URL}/products`

export const getProductListAPI = async () => {
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

export const deleteProductAPI = async (id) => {
  const requestOptions = {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
  };
  await fetch(`${baseUrl}/${id}`, requestOptions);
};

export const postProductAPI = async (data) => {
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

export const updateProductAPI = async (data, id) => {
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

export const getProductDetailAPI = async (id) => {
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
