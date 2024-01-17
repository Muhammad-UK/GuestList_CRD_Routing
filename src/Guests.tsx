import { GuestsProps } from "./types";

const Guests = ({ guests, deleteGuest }: GuestsProps) => {
  return (
    <div className="guests">
      {guests.map((guest) => {
        return (
          <section key={guest.id}>
            <h2>{guest.name}</h2>
            <button onClick={() => deleteGuest(guest)}>Delete</button>
          </section>
        );
      })}
    </div>
  );
};
export default Guests;
