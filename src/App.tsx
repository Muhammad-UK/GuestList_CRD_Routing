import { Home } from "./Home";
import { CreatedGuestData, GuestsData } from "./types";
import Guests from "./Guests";
import GuestDetail from "./GuestDetail";
import CreateGuest from "./CreateGuest";
import "./App.css";
import { useEffect, useState } from "react";
import {
  Link,
  useLocation,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";

const App = () => {
  const [guests, setGuests] = useState<GuestsData[]>([]);
  const { pathname } = useLocation();
  const navigate = useNavigate();

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
      navigate(`/guests/${json.data.id}`);
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
    <div className="appRoot">
      <h1>Welcome to the Guest List!</h1>
      <nav>
        <Link to={"/"} className={pathname === "/" ? "selected" : ""}>
          {" "}
          Home
        </Link>
        <Link
          to={"/guests"}
          className={pathname === "/guests" ? "selected" : ""}
        >
          Guests
        </Link>
        <Link
          to={"/createGuest"}
          className={pathname === "/createGuest" ? "selected" : ""}
        >
          Create Guest
        </Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/guests"
          element={<Guests guests={guests} deleteGuest={deleteGuest} />}
        />
        <Route
          path="/createGuest"
          element={<CreateGuest createGuest={createGuest} />}
        />
        <Route path="/guests/:id" element={<GuestDetail guests={guests} />} />
      </Routes>
    </div>
  );
};

export default App;
