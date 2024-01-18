import { useParams, Link } from "react-router-dom";
import { GuestDetailProps } from "./types";

const GuestDetail = ({ guests }: GuestDetailProps) => {
  const { id } = useParams();
  if (id) {
    var guest = guests.find((guest) => guest.id === parseInt(id));
  }
  if (guest) {
    return (
      <div>
        <h2>Guest Detail:</h2>
        <h3>{guest.name}</h3>
        <p>Email: {guest.email}</p>
        <p>Phone: {guest.phone}</p>
        <Link to={"/guests"}>All Guests</Link>
      </div>
    );
  }
  return null;
};
export default GuestDetail;
