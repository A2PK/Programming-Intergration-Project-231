"use client";
import { BorrowHeader, BorrowRow, HistoryHeader, HistoryRow } from "./func";
import { useState, useEffect } from "react";
import { User, UserActivity } from "@/app/models/User";
import { getBorrows } from "@/app/api/user_api";

export default function BorrowPage() {
  const [borrows, setBorrows] = useState<UserActivity[]>([]);
  const [history, setHistory] = useState<UserActivity[]>([]);
  const id = localStorage.getItem("userID");

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (id === null) {
          throw new Error("No userID in localStorage");
        }
        const res = await getBorrows(id);
        setBorrows(res.data.borrowedList as UserActivity[]);
        setHistory(res.data.borrowingList as UserActivity[]);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [id]);
  return (
    <>
      <div className="mb-3">
        <h2>Current Borrowings</h2>
        <hr />
        <BorrowHeader />
        {borrows.map((book, index) => (
          <BorrowRow no={index + 1} act={book} key={index} />
        ))}
      </div>
      <div>
        <h2>Borrow History</h2>
        <hr />
        <HistoryHeader />
        {history.map((book, index) => (
          <HistoryRow no={index + 1} act={book} key={index} />
        ))}
      </div>
    </>
  );
}
