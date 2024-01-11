import axios from "axios";
const domain =
  (process.env.NEXT_PUBLIC_PROTO ?? "") +
  (process.env.NEXT_PUBLIC_HOST ?? "") +
  process.env.NEXT_PUBLIC_PORT;

const getUser = async (id: string) => {
  return await axios.get(domain + "/users/" + id, {
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  });
};

const getBorrows = async (id: string) => {
  return await axios.get(domain + "/users/" + id + "/borrows", {
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  });
};
const getReservations = async (id: string) => {
  return await axios.get(domain + "/users/" + id + "/reservations", {
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  });
};
export { getUser, getBorrows, getReservations };
