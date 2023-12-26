import { BorrowHeader, BorrowRow } from "./func";

export default function BorrowPage() {
  return (
    <>
      <h2>Borrowed Books</h2>
      <hr />
      <BorrowHeader />
      <BorrowRow no={1} bname="Computer Networks" duedate="30-12-2023" />
      <BorrowRow no={2} bname="Database Systems" duedate="31-12-2023" />
    </>
  );
}
