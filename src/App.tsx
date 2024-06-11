import Hotel from "./Hotel";
import { useHotels } from "./hooks/useHotels";

export type HotelType = {
  id: number;
  title: string;
  price: number;
  img: string;
  stars: number;
  usersGlobalMark: number;
};

function App() {
  const { hotels, error, loading } = useHotels();

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
