export function ReserveRow(props: any) {
  return (
    <div className="row mb-3">
      <div className="col-1">{props.no}</div>
      <div className="col-5">{props.bname}</div>
      <div className="col-3">{props.pickdate}</div>
      <div className="col-3">{props.picklocation}</div>
    </div>
  );
}

export function ReserveHeader() {
  return (
    <div className="row mb-3 fw-bold">
      <div className="col-1">No.</div>
      <div className="col-5">Book Name</div>
      <div className="col-3">Pickup Date</div>
      <div className="col-3">Pickup Location</div>
    </div>
  );
}
