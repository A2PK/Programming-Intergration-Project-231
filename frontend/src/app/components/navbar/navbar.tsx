"use client";

import "./navbar.css";
import logo from "/public/Logo_BK.png";
import Image from "next/image";
// import "bootstrap/dist/js/bootstrap.min.js";
import Script from "next/script";
import Link from "next/link";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap-icons/font/bootstrap-icons.css";

export default function NavBar(): React.JSX.Element {
  var id, username;
  if (typeof window !== 'undefined') {
    // Perform localStorage action
    id = localStorage.getItem("userID");
    username = localStorage.getItem("username");
  }
    const handleLogout = () => {
      localStorage.removeItem("userID");
      localStorage.removeItem("username");
  };

  return (
    <nav className="navbar navbar-expand-md bg-body-tertiary">
      <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js" />;
      <div className="container-fluid">
        <Link className="navbar-brand" href="/dashboard/homepage">
          <div className="row align-items-center justify-content-center ps-3">
            <div className="col p-0">
              <Image
                src={logo}
                alt="logo"
                width="50"
                className="d-inline-block align-text-top"
              />
            </div>
            <div className="col">
              <div id="navBrand2">ĐẠI HỌC QUỐC GIA THÀNH PHỐ HỒ CHÍ MINH</div>
              <div id="navBrand1">TRƯỜNG ĐẠI HỌC BÁCH KHOA</div>
            </div>
          </div>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <div className="navbar-nav ms-auto">
            <a className="nav-link" href="/dashboard/search" onClick={() => localStorage.removeItem("newsearch")}>
              Books
            </a>
            {id ? (
              <>
                <Link className="nav-link" href="/profile/account">
                  Account
                </Link>
                <Link
                  className="nav-link"
                  onClick={handleLogout}
                  aria-disabled="true"
                  href="/"
                >
                  Logout
                </Link>
                <div className="navbar-text text-info-emphasis user-select-none">
                  <i className="bi bi-person-circle"></i> {username}
                </div>
              </>
            ) : (
              <>
                <Link className="nav-link" href="/auth/login">
                  Login
                </Link>
                <Link className="nav-link" href="/auth/register">
                  Register
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
