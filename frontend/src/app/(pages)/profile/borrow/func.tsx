import { UserActivity } from "@/app/models/User";
import { parseGoTime } from "@/app/api/time";
export function BorrowRow({ no, act }: { no: number; act: UserActivity }) {
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
        <button className="btn btn-outline-secondary btn-sm">Extend</button>
      </div>
    </div>
  );
}

export function BorrowHeader() {
  return (
    <div className="row mb-3 fw-bold">
      <div className="col-1">No.</div>
      <div className="col-5">Book Name</div>
      <div className="col-4">Return Date</div>
      <div className="col-2"></div>
    </div>
  );
}

export function HistoryRow({ no, act }: { no: number; act: UserActivity }) {
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
        <button className="btn btn-outline-secondary btn-sm">Extend</button>
      </div>
    </div>
  );
}

export function HistoryHeader() {
  return (
    <div className="row mb-3 fw-bold">
      <div className="col-1">No.</div>
      <div className="col-5">Book Name</div>
      <div className="col-4">Return Date</div>
      <div className="col-2"></div>
    </div>
  );
}
