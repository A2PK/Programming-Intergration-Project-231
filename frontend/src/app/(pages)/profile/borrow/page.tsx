"use client";
import { BorrowHeader, BorrowRow, HistoryHeader, HistoryRow } from "./func";
import { useState, useEffect } from "react";
import { User, UserActivity } from "@/app/models/User";
import { getBorrows } from "@/app/api/user_api";
import { Loading } from "@/app/components/loading/loading";

export default function BorrowPage() {
  const [borrows, setBorrows] = useState<UserActivity[]>([]);
  const [history, setHistory] = useState<UserActivity[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const id = localStorage.getItem("userID");

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (id === null) {
          throw new Error("No userID in localStorage");
        }
        const res = await getBorrows(id);
        const borrowedList: UserActivity[] = res.data.borrowHistory;
        const borrowingList: UserActivity[] = res.data.currentBorrowings;

        setBorrows(borrowingList);
        setHistory(borrowedList);
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
