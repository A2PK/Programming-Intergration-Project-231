"use client";
import "./signform.css";
import Image from "next/image";
import logo from "public/Logo_BK.png";
import { FormEvent, useState } from "react";
import axios from "axios";
import { redirect, useRouter } from "next/navigation";

export default function SignForm({
  text,
}: {
  text: string;
}): React.JSX.Element {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const err = localStorage.getItem("err");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:8080/users/login", {
        username,
        password,
      });
      localStorage.setItem("userID", res.data.id);
      localStorage.setItem("username", res.data.username);
      console.log(res.data);
      router.push("/");
    } catch (error) {
      localStorage.setItem("err", "Invalid username or password");
    }
  };

  return (
    <div className="h-100 text-center d-flex justify-content-center align-items-center">
      <span id="form" className="border rounded-3 p-4 shadow bg-white">
        <form onSubmit={handleSubmit}>
          <h1>
            <strong>{text}</strong>
          </h1>
          <h2>The Future Library</h2>
          Your online sanctuary for book lovers
          <br />
          <Image src={logo} width={120} alt="BK logo" className="my-3" />
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              id="inputText"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            ></input>
          </div>
          <div className="mb-3">
            <input
              type="password"
              className="form-control"
              id="inputPassword"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></input>
          </div>
          <div className="d-grid gap-2">
            <button id="signButton" type="submit" className="btn mx-4">
              <strong>{text}</strong>
            </button>
          </div>
        </form>
      </span>
    </div>
  );
}
