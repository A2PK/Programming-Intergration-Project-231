import axios from "axios";
import { User, UserActivity } from "../models/User";

const getUser = async (id: string) => {
  return await axios.get("http://localhost:8080/users/" + id, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};

const getBorrows = async (id: string) => {
  return await axios.get("http://localhost:8080/users/" + id + "/borrows", {
    headers: {
      "Content-Type": "application/json",
    },
  });
};
const getReservations = async (id: string) => {
  return await axios.get(
    "http://localhost:8080/users/" + id + "/reservations",
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
};
export { getUser, getBorrows, getReservations };
