"use client";
import { ReserveHeader, ReserveRow } from "./func";
import { useState, useEffect } from "react";
import { UserActivity } from "@/app/models/User";
import { getReservations } from "@/app/api/user_api";
import { isArray } from "util";

export default function ReservationPage() {
  const [reservedBooks, setReservedBooks] = useState<UserActivity[]>([]);
  const id = localStorage.getItem("userID");

  const fetchData = async () => {
    try {
      if (id === null) {
        throw new Error("No userID in localStorage");
      }
      const res = await getReservations(id);
      setReservedBooks(res.data.reservations as UserActivity[]);
      console.log(res.data.reservations);
      console.log(reservedBooks);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <h2>Book Reservations</h2>
      <hr />
      <ReserveHeader />
      {/* {reservedBooks.map((book, index) => (
        <ReserveRow key={index} no={index + 1} act={book} />
      ))} */}
    </>
  );
}
