"use client";
import { PersonalInfo } from "./func";
import { getUser } from "@/app/api/user_api";
import { User } from "@/app/models/User";
import { useEffect, useState } from "react";

export default function AccountPage() {
  const [user, setUser] = useState<User>();
  const id = localStorage.getItem("userID");

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (id === null) {
          throw new Error("No userID in localStorage");
        }
        const res = await getUser(id);
        setUser(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [id]);

  return (
    <>
      <h2>Personal Information</h2>
      <hr />
      {user ? <PersonalInfo user={user} /> : <></>}
    </>
  );
}
