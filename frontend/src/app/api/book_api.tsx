import axios from "axios";
import { Book } from "../models/Book";
const getBook = async (realid: string): Promise<Book> => {
  const domain =
    process.env.NEXT_PUBLIC_PROTO +
    process.env.NEXT_PUBLIC_HOST +
    process.env.NEXT_PUBLIC_PORT;
  return axios
    .get(domain + "/books/" + realid, {
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
export { getBook };
