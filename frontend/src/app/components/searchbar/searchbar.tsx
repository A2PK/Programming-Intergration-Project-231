"use client";
import logo from "public/book_icon_search.png"
import Image from "next/image";
import "./searchbar.css";
import dynamic from "next/dynamic";
import 'bootstrap/dist/css/bootstrap.min.css';

const DynamicBootstrap = dynamic(
  () => require('bootstrap/dist/js/bootstrap.min.js'),
  { ssr: false }
);

const SearchBar = () => {
  return <div className="searchbar">
          <div className="row align-items-center ps-3">
            <div className="col mg-0">
              <Image
                src={logo}
                alt="logo"
                width="35"
              />
            </div>
              <div className = "col-md-3">
                <h4 className="mb-0j ">Read your favorite books</h4>
              </div>
              <div className="col-md-4">
  <div className="input-group rounded flex-grow align-items-center">
    <input
      type="search"
      className="form-control rounded text-center" // Add 'text-center' class to center the input text
      placeholder="Search by ISBN or Book Name..."
      aria-label="Search"
    ></input>
    <span
      className="input-group-text border-0 d-flex align-items-center" // Use 'd-flex' and 'align-items-center' to center the icon
      id="search-addon"
      aria-describedby="search-addon">
      <i className="bi bi-search"></i>
    </span>
  </div>
</div>
          </div>
    </div>
}

export default SearchBar;