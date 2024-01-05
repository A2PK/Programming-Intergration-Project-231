import { UserActivity } from "@/app/models/User";
import { parseGoTime } from "@/app/api/time";
export function ReserveRow({ no, act }: { no: number; act: UserActivity }) {
  return (
    <div className="row mb-3">
      <div className="col-1">{no}</div>
      <div className="col-3">{act.bookName}</div>
      <div className="col-4">{parseGoTime(act.endDate)}</div>
      <div className="col-2">{act.location}</div>
      <div className="col-2">
        <button className="btn btn-outline-danger btn-sm">Cancel</button>
      </div>
    </div>
  );
}

export function ReserveHeader() {
  return (
    <div className="row mb-3 fw-bold">
      <div className="col-1">No.</div>
      <div className="col-3">Book Name</div>
      <div className="col-4">Dued Date</div>
      <div className="col-2">Location</div>
      <div className="col-2"></div>
    </div>
  );
}
