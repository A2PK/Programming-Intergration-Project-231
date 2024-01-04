import axios from "axios";
import { User } from "../models/User";

const getUser = async (id: string | null) => {
  try {
    if (id === null) {
      throw new Error("id is null");
    }
    const { data } = await axios.get<User>(
      "http://localhost:8080/users/" + id,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};
export { getUser };
