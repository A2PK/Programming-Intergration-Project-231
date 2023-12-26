export function PersonalInfo(props: any) {
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
        <span className="input-group-text">Email</span>
        <input
          type="text"
          className="form-control"
          placeholder={props.email}
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
        <span className="input-group-text">Date of Birth</span>
        <input
          type="text"
          className="form-control"
          placeholder={props.dob}
          disabled
        />
      </div>
    </>
  );
}
