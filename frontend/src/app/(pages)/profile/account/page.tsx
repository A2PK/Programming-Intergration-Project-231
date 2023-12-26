import { PersonalInfo } from "./func";

export default function AccountPage() {
  return (
    <>
      <h2>Personal Information</h2>
      <hr />
      <PersonalInfo
        name="John Doe"
        email="johndoe@d.com"
        phone="1234567890"
        dob="12/12/2000"
      />
    </>
  );
}
