'use client';
import { Navbar } from 'react-bootstrap';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookReader, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import React,{useState} from 'react';

const SearchBar = () => {
const [search,setSearch] = useState("");
const [bookdata,setData] = useState([]);
const handleSearchChange = (newValue: string) => {
  // Perform the first action, e.g., updating the state
  setSearch(newValue);
  localStorage.setItem("searchValue", search);
};
const searchBook=(evt: any)=>{
    evt.preventDefault();
    localStorage.setItem("searchValue", search);
    console.log("hello");
    // axios.get('https://www.googleapis.com/books/v1/volumes?q='+search+'&key=AIzaSyB69Lj2TehCjvA2pen9eDrv_jEylQZEXNc')
    //   .then(res=>setData(res.data.items))
    //   .catch(err=>console.log(err))
    // <Link ></Link>
}
  return (
    <Navbar
      //fixed="top"
      bg="dark"
      variant="dark"
      expand="md"
      className="border-bottom border-secondary-blue"
      //style={{ height: '64px' }}
    >
      <div className='col-md-1'></div>
      <div className='container text-light col-md-4 fs-2 fst-italic fw-bold' style={{ fontFamily: 'Inria Serif, serif' }}>
        <p className='mt-1 mb-1'><FontAwesomeIcon icon={faBookReader} />&nbsp; Read your favorite books</p>
      </div>
      <div className='col-xl-3 col-md-5 col-sm-11 col-12'>
        <form className="d-flex" >
          <div className="input-group">
            <span className="input-group-text">
              <FontAwesomeIcon icon={faMagnifyingGlass} bounce type='submit'/> 
            </span>
            <input
              className="form-control"
              type="text" //search
              placeholder="Search"
              aria-label="Search"
              value={search}
              onChange={(e)=>handleSearchChange(e.target.value)}
              onKeyDown={searchBook}

            />
          </div>
        </form>
      </div>
      <br></br>
      <div className='col-md-3'></div>
      {/* style={{ width: '350px' }} */}
    </Navbar>
  );
};

export default SearchBar;
