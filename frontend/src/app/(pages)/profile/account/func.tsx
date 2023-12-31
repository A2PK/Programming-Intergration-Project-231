interface Props {
  name: string;
  ssn: string;
  phone: string;
  age: number;
}
export function PersonalInfo(props: Props) {
  return (
    <>
      <div className="input-group mb-3">
        <span className="input-group-text">Name</span>
        <input
          type="text"
          className="form-control"
          placeholder={props.name}
          disabled
        />
      </div>
      <div className="input-group mb-3">
        <span className="input-group-text">SSN</span>
        <input
          type="text"
          className="form-control"
          placeholder={props.ssn}
          disabled
        />
      </div>
      <div className="input-group mb-3">
        <span className="input-group-text">Phone</span>
        <input
          type="text"
          className="form-control"
          placeholder={props.phone}
          disabled
        />
      </div>
      <div className="input-group mb-3">
        <span className="input-group-text">Age</span>
        <input
          type="text"
          className="form-control"
          placeholder={String(props.age)}
          disabled
        />
      </div>
    </>
  );
}
