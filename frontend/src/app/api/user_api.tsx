import axios from "axios";
import { User } from "../models/User";

const getUser = async (): Promise<User> => {
  const id = "65911559f205ce273ef0a8f6";

  return axios
    .get("http://localhost:8080/users/" + id, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      console.log(err);
    });
};
export { getUser };