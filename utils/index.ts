export async function fetchCars() {
  const headers = {
    "x-rapidapi-key": "62ef19548fmshb73cf0b78e954cbp1cd2d9jsn1ec7e80768b9",
    "x-rapidapi-host": "cars-by-api-ninjas.p.rapidapi.com",
  };

  const response = await fetch("https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla", {
    headers: headers,
  });

  const result = await response.json();

  return result;
}
