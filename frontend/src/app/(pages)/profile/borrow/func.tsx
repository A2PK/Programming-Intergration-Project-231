import { UserActivity } from "@/app/models/User";
import { parseGoTime } from "@/app/api/time";
import axios from "axios";

const domain =
  process.env.NEXT_PUBLIC_PROTO +
  process.env.NEXT_PUBLIC_HOST +
  process.env.NEXT_PUBLIC_PORT;

export function BorrowRow({ no, act }: { no: number; act: UserActivity }) {
  const handleExtend = async () => {
    const id = localStorage.getItem("userID");
    try {
      const res = await axios.post(
        domain + "/users/" + id + "/extendBorrow/" + String(act.bookId)
      );
      console.log(res.data.message);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="row mb-3">
      <div className="col-1">{no}</div>
      <div className="col-5">{act.bookName}</div>
      <div className="col-4">
        {act.extendedDate
          ? parseGoTime(act.extendedDate)
          : parseGoTime(act.endDate)}
      </div>
      <div className="col-2">
        <button
          onClick={handleExtend}
          className="btn btn-outline-secondary btn-sm"
        >
          Extend
        </button>
      </div>
    </div>
  );
}

export function BorrowHeader() {
  return (
    <div className="row mb-3 fw-bold">
      <div className="col-1">No.</div>
      <div className="col-5">Book Name</div>
      <div className="col-4">Dued Date</div>
      <div className="col-2"></div>
    </div>
  );
}

export function HistoryRow({ no, act }: { no: number; act: UserActivity }) {
  return (
    <div className="row mb-3">
      <div className="col-1">{no}</div>
      <div className="col-5">{act.bookName}</div>
      <div className="col-3">{parseGoTime(act.startDate)}</div>
      <div className="col-3">
        {act.extendedDate
          ? parseGoTime(act.extendedDate)
          : parseGoTime(act.endDate)}
      </div>
    </div>
  );
}

export function HistoryHeader() {
  return (
    <div className="row mb-3 fw-bold">
      <div className="col-1">No.</div>
      <div className="col-5">Book Name</div>
      <div className="col-3">Reserve Date</div>
      <div className="col-3">Return Date</div>
    </div>
  );
}
