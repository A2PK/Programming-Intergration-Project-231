"use client";
import "./navbar.css";
import logo from "/public/Logo_BK.png";
import Image from "next/image";
import dynamic from "next/dynamic";
import "bootstrap/dist/css/bootstrap.min.css";
import Script from 'next/script'
import Link from "next/link";
const DynamicBootstrap = dynamic(
  () => require('bootstrap/dist/js/bootstrap.min.js'),
  { ssr: false }
);
const NavBar: React.FC = () => {
  return (
    <nav className="navbar navbar-expand-md bg-body-tertiary">
      <div className="container-fluid">
      <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"/>
        <Link className="navbar-brand" href={"/dashboard/homepage"}>
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
            <Link href={"/dashboard/search"} className="nav-link"> Books </Link>
            {/* <a className="nav-link" href="/dashboard/search">
              Books
            </a> */}
            <a className="nav-link" href="#">
              Account
            </a>
            <Link href={"/auth/register"} className="nav-link"> Register </Link>
            {/* <a className="nav-link" href="/auth/register">
              Register
            </a> */}
            <Link href={"/auth/login"} className="nav-link"> Login </Link>
            {/* <a className="nav-link" href="/auth/login">Login</a> */}
          </div>
        </div>
      </div>
    </nav>
    
  );
};

export default NavBar;
