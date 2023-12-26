"use client";

import logo from "public/book_icon_search.png";
import Image from "next/image";
import "./searchbar.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Search from "./search";

const SearchBar = () => {
  return (
    <div>
      <div className="searchbar">
        <div className="row align-items-center ps-3">
          <div className="col mg-0">
            <Image src={logo} alt="logo" width="35" />
          </div>
          <div className="col-md-3">
            <h4 className="searchbarTitle">Read your favorite books</h4>
          </div>
          <div className=" col-md-3">
            <Search />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
