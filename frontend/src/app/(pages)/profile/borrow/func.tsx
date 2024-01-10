import { UserActivity } from "@/app/models/User";
import { parseGoTime, checkGoNull } from "@/app/api/time";
import axios from "axios";

const domain =
  (process.env.NEXT_PUBLIC_PROTO ?? "") +
  (process.env.NEXT_PUBLIC_HOST ?? "") +
  process.env.NEXT_PUBLIC_PORT;

export function BorrowRow({ no, act }: { no: number; act: UserActivity }) {
  const handleExtend = async () => {
    const id = localStorage.getItem("userID");
    const token = localStorage.getItem("token");
    try {
      const res = await axios.post(
        domain + "/users/" + id + "/extendBorrow/" + act.bookId,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (res.status === 200) {
        alert("Extend Successful");
      } else {
        alert("Extend Failed");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="row mb-3">
      <div className="col-1">{no}</div>
      <div className="col-5">{act.bookName}</div>
      <div className="col-4">
        {checkGoNull(act.extendedDate)
          ? parseGoTime(act.endDate)
          : parseGoTime(act.extendedDate)}
      </div>
      <div className="col-2">
        <button
          onClick={handleExtend}
          className="btn btn-outline-secondary btn-sm text-dark"
        >
          Extend
        </button>
      </div>
    </div>
  );
}

export function BorrowHeader() {
  return (
    <div className="row mb-3 fw-bold text-dark">
      <div className="col-1">No.</div>
      <div className="col-5">Book Name</div>
      <div className="col-4">Dued Date</div>
      <div className="col-2"></div>
    </div>
  );
}

export function HistoryRow({ no, act }: { no: number; act: UserActivity }) {
  return (
    <div className="row mb-3 text-dark">
      <div className="col-1">{no}</div>
      <div className="col-5">{act.bookName}</div>
      <div className="col-3">{parseGoTime(act.startDate)}</div>
      <div className="col-3">
        {checkGoNull(act.extendedDate)
          ? parseGoTime(act.endDate)
          : parseGoTime(act.extendedDate)}
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
