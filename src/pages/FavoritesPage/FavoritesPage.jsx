import { useState, useEffect } from "react";
import { fetchCars } from "../../services/api";
import { CarList } from "../../components/CarList";
import { getFavoriteCars } from "../../js/getFavoriteCars";

export default function FavoritesPage() {
  const [favoriteCars, setFavoriteCars] = useState([]);
  const LOCALSTORAGE_KEY = "favorite-cars";

  useEffect(() => {
    const getCars = async () => {
      try {
        const res = await fetchCars();
        const items = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));
        const ids = items?.map((item) => item.id);

        setFavoriteCars(getFavoriteCars(ids, res));
      } catch (error) {
        console.log(error.message);
      }
    };

    getCars();
  },[]);

  return <CarList cars={favoriteCars} />;
}
