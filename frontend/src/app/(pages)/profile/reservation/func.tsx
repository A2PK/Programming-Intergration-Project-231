interface Props {
  no: number;
  bname: string;
  pickdate: string;
  picklocation: string;
}
export function ReserveRow(props: Props) {
  return (
    <div className="row mb-3">
      <div className="col-1">{props.no}</div>
      <div className="col-3">{props.bname}</div>
      <div className="col-4">{props.pickdate}</div>
      <div className="col-2">{props.picklocation}</div>
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
      <div className="col-4">Pickup Date</div>
      <div className="col-2">Location</div>
      <div className="col-2"></div>
    </div>
  );
}
