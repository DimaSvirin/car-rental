import axios from "axios";

async function fetchCars() {
  try {
    const url = "https://6509a16df6553137159bc6b6.mockapi.io/adverts";
    const response = await axios.get(url);
    const { data } = response;
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
}

export default fetchCars;
