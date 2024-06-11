import { useEffect, useState } from "react";
import { HotelType } from "../App";

export const useHotels = () => {
  const [hotels, setHotels] = useState<HotelType[]>([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHotels = async () => {
      const data = await fetch("./db.json")
        .then((data) => data.json())
        .then((db) => db.hotels)
        .catch(() => setError(true));
      setHotels(data);
      setLoading(false);
    };
    fetchHotels();
  }, []);

  return {
    hotels, error, loading
  }
};
