import axios from "axios";

export const RestaurantFinder = axios.create({
  baseURL: "http://localhost:3001/api/v1/restaurants",
});
