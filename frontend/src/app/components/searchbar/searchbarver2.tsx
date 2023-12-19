'use client';
import { Navbar } from 'react-bootstrap';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookReader, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
const SearchBar = () => {
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
        <p className='mt-1 mb-1'><FontAwesomeIcon icon={faBookReader} shake />&nbsp; Read your favorite books</p>
      </div>
      <div className='col-xl-3 col-md-5 col-sm-11 col-12'>
        <form className="d-flex" >
          <div className="input-group">
            <span className="input-group-text">
              <FontAwesomeIcon icon={faMagnifyingGlass} bounce type="submit" />
            </span>
            <input
              className="form-control"
              type="search"
              placeholder="Search"
              aria-label="Search"
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
