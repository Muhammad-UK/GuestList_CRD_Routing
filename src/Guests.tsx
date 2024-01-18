import { GuestsProps } from "./types";
import { Link } from "react-router-dom";

const Guests = ({ guests, deleteGuest }: GuestsProps) => {
  return (
    <div className="guests">
      {guests.map((guest) => {
        return (
          <section key={guest.id}>
            <h2>{guest.name}</h2>
            <Link to={`/guests/${guest.id}`}>{guest.name}</Link>
            <button onClick={() => deleteGuest(guest)}>Delete</button>
          </section>
        );
      })}
    </div>
  );
};
export default Guests;
