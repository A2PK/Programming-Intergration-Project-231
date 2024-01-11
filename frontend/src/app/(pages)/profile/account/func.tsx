import { User } from "@/app/models/User";
export function PersonalInfo({ user }: { user: User }) {
  return (
    <>
      <div className="row mb-4 text-dark" >
        <div className="col-3 text-end">Name:</div>
        <div className="col">{user.name ? user.name : ""}</div>
      </div>
      <div className="row mb-4 text-dark">
        <div className="col-3 text-end me-md-0 me-2">Username:</div>
        <div className="col">{user.username ? user.username : ""}</div>
      </div>
      <div className="row mb-4 text-dark">
        <div className="col-3 text-end">SSN:</div>
        <div className="col">{user.ssn ? user.ssn : ""}</div>
      </div>
      <div className="row mb-4 text-dark">
        <div className="col-3 text-end">Phone Number:</div>
        <div className="col">{user.phonenum ? user.phonenum : ""}</div>
      </div>
      <div className="row mb-4 text-dark">
        <div className="col-3 text-end">Age:</div>
        <div className="col">{user.age ? user.age : ""}</div>
      </div>
    </>
  );
}
