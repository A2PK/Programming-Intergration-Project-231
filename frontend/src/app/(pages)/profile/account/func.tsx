import { User } from "@/app/models/User";
export function PersonalInfo({ user }: { user: User }) {
  return (
    <>
      <div className="row mb-4">
        <div className="col-2 text-end">Name:</div>
        <div className="col">{user.name ? user.name : ""}</div>
      </div>
      <div className="row mb-4">
        <div className="col-2 text-end">SSN:</div>
        <div className="col">{user.ssn ? user.ssn : ""}</div>
      </div>
      <div className="row mb-4">
        <div className="col-2 text-end">Phone Number:</div>
        <div className="col">{user.phonenum ? user.phonenum : ""}</div>
      </div>
      <div className="row mb-4">
        <div className="col-2 text-end">Age:</div>
        <div className="col">{user.age ? user.age : ""}</div>
      </div>
    </>
  );
}
