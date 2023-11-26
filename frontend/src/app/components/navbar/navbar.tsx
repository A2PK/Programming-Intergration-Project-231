"use client";
import "./navbar.css";
import logo from "/public/Logo_BK.png";
import Image from "next/image";
import dynamic from "next/dynamic";

const DynamicBootstrap = dynamic(
  () => require('bootstrap/dist/js/bootstrap.min.js'),
  { ssr: false }
);

const NavBar: React.FC = () => {
  return (
    <nav className="navbar navbar-expand-md bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="/dashboard/homepage">
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
        </a>
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
            <a className="nav-link" href="#">
              Books
            </a>
            <a className="nav-link" href="#">
              Account
            </a>
            <a className="nav-link" href="#">
              Register
            </a>
            <a className="nav-link">Login</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
