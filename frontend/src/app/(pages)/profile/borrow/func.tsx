interface Props {
  no: number;
  bname: string;
  duedate: string;
}
export function BorrowRow(props: Props) {
  return (
    <div className="row mb-3">
      <div className="col-1">{props.no}</div>
      <div className="col-5">{props.bname}</div>
      <div className="col-4">{props.duedate}</div>
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
      <div className="col-4">Dued Date</div>
      <div className="col-2"></div>
    </div>
  );
}
