import axios from "axios";
import { User } from "../models/User";

const getUser = async () => {
  const id = "65911559f205ce273ef0a8f6";

  try {
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
