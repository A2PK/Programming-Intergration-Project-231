"use client";
import { PersonalInfo } from "./func";
import { getUser } from "@/app/api/user_api";
import { User } from "@/app/models/User";
import { useEffect, useState } from "react";

export default function AccountPage() {
  const [user, setUser] = useState<User>();

  const fetchData = () => {
    const data = getUser()
      .then((data) => {
        const temp: User = data;
        setUser(temp);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <h2>Personal Information</h2>
      <hr />
      <PersonalInfo
        name={user ? user.name : ""}
        ssn={user ? user.ssn : ""}
        phone={user ? user.phonenum : ""}
        age={user ? user.age : 0}
      />
    </>
  );
}
