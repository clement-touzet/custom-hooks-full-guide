import { useEffect, useState } from "react";
import Hotel from "./Hotel";

export type HotelType = {
  id: number;
  title: string;
  price: number;
  img: string;
  stars: number;
  usersGlobalMark: number;
};

function App() {
  const [hotels, setHotels] = useState<HotelType[]>([]);
  const [error, setLoadingError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHotels = async () => {
      const data = await fetch("./db.json")
        .then((data) => data.json())
        .then((db) => db.hotels)
        .catch(() => setLoadingError(true));
      setHotels(data);
      setLoading(false);
    };
    fetchHotels();
  }, []);

  return (
    <div>
      {error ? <p>Une erreur est survenue</p> : null}
      {loading ? <p>loading...</p> : null}
      {!loading && hotels.length > 0
        ? hotels.map((hotel) => {
            return <Hotel key={hotel.id} hotel={hotel} />;
          })
        : null}
    </div>
  );
}

export default App;
