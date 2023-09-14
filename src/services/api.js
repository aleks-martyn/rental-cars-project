import axios from "axios";

axios.defaults.baseURL = "https://65030523a0f2c1f3faeb4bc2.mockapi.io/api";

export const fetchCars = async () => {
  const { data } = await axios.get("/cars");

  return data;
};
