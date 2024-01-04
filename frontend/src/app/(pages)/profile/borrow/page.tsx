"use client";
import { BorrowHeader, BorrowRow } from "./func";
import { useState, useEffect } from "react";
import { Book } from "@/app/models/Book";

export default function BorrowPage() {
  // const [borrowedBooks, setBorrowedBooks] = useState<Book[]>([]);
  return (
    <>
      <div className="mb-3">
        <h2>Borrowed Books</h2>
        <hr />
        <BorrowHeader />
        {/* {borrowedBooks.map((book, index) => (
          <BorrowRow key={index} no={index + 1} bname={book.name} duedate={book.returndate} />
        ))} */}
        <BorrowRow no={1} bname="Computer Networks" duedate="30-12-2023" />
        <BorrowRow no={2} bname="Database Systems" duedate="31-12-2023" />
      </div>
      <div>
        <h2>Borrow History</h2>
        <hr />
      </div>
    </>
  );
}
