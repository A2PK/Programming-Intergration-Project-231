import { ReserveHeader, ReserveRow } from "./func";
import { useState, useEffect } from "react";
import { Book } from "@/app/models/Book";

export default function ReservationPage() {
  // const [reservedBooks, setReservedBooks] = useState<Book[]>([]);
  return (
    <>
      <h2>Book Reservations</h2>
      <hr />
      <ReserveHeader />
      {/* {reservedBooks.map((book, index) => (
        <ReserveRow
          key={index}
          no={index + 1}
          bname={book.name}
          pickdate={book.returndate}
          picklocation={book.location}
        />
      ))} */}
      <ReserveRow
        no={1}
        bname="The Alchemist"
        pickdate="01-01-2021"
        picklocation="lib 1"
      />
      <ReserveRow
        no={2}
        bname="Project Management"
        pickdate="02-01-2021"
        picklocation="lib 1"
      />
    </>
  );
}
