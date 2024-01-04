interface Props {
  name: string;
  ssn: string;
  phone: string;
  age: number | null;
}
export function PersonalInfo(props: Props) {
  return (
    <>
      <div className="row mb-4">
        <div className="col-2 text-end">Name:</div>
        <div className="col">{props.name}</div>
      </div>
      <div className="row mb-4">
        <div className="col-2 text-end">SSN:</div>
        <div className="col">{props.ssn}</div>
      </div>
      <div className="row mb-4">
        <div className="col-2 text-end">Phone Number:</div>
        <div className="col">{props.phone}</div>
      </div>
      <div className="row mb-4">
        <div className="col-2 text-end">Age:</div>
        <div className="col">{props.age}</div>
      </div>
    </>
  );
}
