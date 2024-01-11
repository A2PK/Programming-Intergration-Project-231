"use client";
import { ReserveHeader, ReserveRow } from "./func";
import { useState, useEffect } from "react";
import { UserActivity } from "@/app/models/User";
import { getReservations } from "@/app/api/user_api";
import { Loading } from "@/app/components/loading/loading";

export default function ReservationPage() {
  const [reservedBooks, setReservedBooks] = useState<UserActivity[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  var id: any;
  if (typeof window !== 'undefined') {
    // Perform localStorage action
    id = localStorage.getItem("userID");
  }
  //const id = typeof window ? null : localStorage.getItem("userID");

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (id === null) {
          throw new Error("No userID in localStorage");
        }
        const res = await getReservations(id);
        setReservedBooks(res.data.reservations as UserActivity[]);
      } catch (error) {
        console.log(error);
      }
      setIsLoading(false);
    };
    fetchData();
  }, [id]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <h2>Book Reservations</h2>
      <hr />
      <ReserveHeader />
      {reservedBooks.map((book, index) => (
        <ReserveRow key={index} no={index + 1} act={book} />
      ))}
    </>
  );
}
