interface Props {
  no: number;
  bname: string;
  duedate: string;
}
export function BorrowRow(props: Props) {
  return (
    <div className="row mb-3">
      <div className="col-1">{props.no}</div>
      <div className="col-6">{props.bname}</div>
      <div className="col-5">{props.duedate}</div>
    </div>
  );
}

export function BorrowHeader() {
  return (
    <div className="row mb-3 fw-bold">
      <div className="col-1">No.</div>
      <div className="col-6">Book Name</div>
      <div className="col-5">Dued Date</div>
    </div>
  );
}
