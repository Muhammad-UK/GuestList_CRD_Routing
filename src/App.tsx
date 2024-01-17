import { Home } from "./Home";
import { CreatedGuestData, GuestsData } from "./types";
import Guests from "./Guests";
import CreateGuest from "./CreateGuest";
import "./App.css";
import { useEffect, useState } from "react";

const App = () => {
  const [guests, setGuests] = useState<GuestsData[]>([]);

  const API =
    "https://fsa-crud-2aa9294fe819.herokuapp.com/api/2309amcohort/guests";
  useEffect(() => {
    const fetchGuestsData = async () => {
      try {
        const response = await fetch(API);
        const json = await response.json();
        setGuests(json.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchGuestsData();
  }, []);

  const createGuest = async (guest: CreatedGuestData) => {
    try {
      const response = await fetch(API, {
        method: "POST",
        body: JSON.stringify(guest),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const json = await response.json();
      setGuests([...guests, json.data]);
    } catch (error) {
      console.error(error);
    }
  };

  const deleteGuest = async (singleGuest: GuestsData) => {
    await fetch(API + `/${singleGuest.id}`),
      {
        method: "DELETE",
      };
    setGuests(
      guests.filter((_guest) => {
        return _guest.id !== singleGuest.id;
      })
    );
  };

  return (
    <div>
      <h1>Welcome to the Guest List!</h1>
      <nav></nav>
      <Home />
      <Guests guests={guests} deleteGuest={deleteGuest} />
      <CreateGuest createGuest={createGuest} />
    </div>
  );
};

export default App;
