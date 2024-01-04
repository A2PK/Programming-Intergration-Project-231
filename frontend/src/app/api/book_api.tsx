import axios from "axios";
import { Book } from "../models/Book";
const getBook = async (realid: string): Promise<Book> => {
    return axios
      .get("http://localhost:8080/books/" + realid, {
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
