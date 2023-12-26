import { ReserveHeader, ReserveRow } from "./func";

export default function ReservationPage() {
  return (
    <>
      <h2>Book Reservations</h2>
      <hr />
      <ReserveHeader />
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
