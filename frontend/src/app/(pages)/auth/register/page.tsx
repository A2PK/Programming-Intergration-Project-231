"use client";
import "./page.css";
import Image from "next/image";
import logo from "public/Logo_BK.png";
import { FormEvent, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { User } from "@/app/models/User";

export default function RegisterPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState("");
  const text = "Sign Up";
  const router = useRouter();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:8080/users", {
        username,
        password,
      });
      const user: User = res.data;
      localStorage.setItem("userID", String(user.id));
      localStorage.setItem("username", user.username);
      router.push("/");
    } catch (error) {
      setErr("Failed to create account");
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
          {err ? <div className="alert alert-danger">{err}</div> : null}
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
