import { useEffect, useState } from "react";
import { fetchCars } from "../../services/api";
import { CarList } from "../../components/CarList";

export default function CatalogPage() {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    const getCars = async () => {
      try {
        const res = await fetchCars();
        setCars(res);
      } catch (error) {
        console.log(error.message);
      }
    };

    getCars();
  }, []);

  return (
    <section>
      <CarList cars={cars} />
    </section>
  );
}
