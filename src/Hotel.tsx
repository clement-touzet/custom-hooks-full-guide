import { HotelType } from "./App";

type Props = {
  hotel: HotelType;
};

const Hotel = ({ hotel }: Props) => {
  return (
    <div>
      <h1>{hotel.title}</h1>
      <p>{hotel.price}€</p>
      <p>{hotel.stars} étoiles</p>
      <p>note : {hotel.usersGlobalMark}/5 </p>
    </div>
  );
};

export default Hotel;
