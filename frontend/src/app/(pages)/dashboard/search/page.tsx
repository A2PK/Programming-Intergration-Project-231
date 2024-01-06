"use client"
import Image from "next/image";
import book1 from "/public/book3.jpg";
import Link from 'next/link';
import Carousel from "@/app/components/carousel/carouselver2";
import SearchBar from "@/app/components/searchbar/searchbarver2";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./search.css"
import { redirect } from "next/navigation";
const SearchPage = ({
  searchParams,
}: {
  searchParams: {
    value: string;
  };
}) => {
  const [bookdata, setData] = useState([]);
  useEffect(() => {
    let searchValue = localStorage.getItem('searchValue');
    if (searchValue && searchValue != "") {
      localStorage.removeItem("searchValue");
      redirect("./search?value=" + searchValue);
    } else {
      console.log("no success")
    }
    if (searchParams && searchParams.value != "") {
      searchValue = searchParams.value;
    }
    if (searchValue && searchValue != "") {
      axios.get('http://localhost:8080/books/search/' + searchValue)
        .then(res => setData(res.data))
        .catch(err => console.log(err))
    } else if (searchValue && searchValue == "") {
      console.log("no success")
      axios.get('http://localhost:8080/books/getAll')
        .then(res => setData(res.data))//setData(res.data.items)
        .catch(err => console.log(err))
    } else if (!searchValue) {
      axios.get('http://localhost:8080/books/getAll')
        .then(res => setData(res.data))//setData(res.data.items)
        .catch(err => console.log(err))
      console.log("nope")
    }
  }, []);

  const products = bookdata.map((book: any, index: number) => ({
    id: index + 1,
    title: book.name || 'No Title',
    author: book.author || 'Some quick example text to build on the card title and make up',
    image: book.image_url || '/default_image_url.png',
    trueID: book.id || '65967338e79890fdef0704b8',
  }));

  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 8;
  const totalPages = Math.ceil(products.length / productsPerPage);
  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;
  const currentProducts = products.slice(startIndex, endIndex);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  return (
    <div>
      <SearchBar />

      <div className='container-fluid' style={{ fontFamily: 'Inria Serif, serif' }}>

        {/* <Carousel /> */}
        <div>
          <p className="text-center mx-4 mt-3 fs-2 justify-center fst-italic fw-semibold text-danger-emphasis" style={{ fontFamily: 'Inria Serif, serif' }}>All books</p>
        </div>
        <div className="row row-cols-1 row-cols-sm-5 justify-content-center gap-1">
          {currentProducts.map((product) => (
            <div key={product.id} className="card col mb-4 p-0 mx-2">
              <div className="myDiv" >
                <img
                  src={product.image}
                  alt={product.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                />
              </div>
              <div className="card-body">
                <h5 className="card-title"><b className="fs-5">{product.title}</b></h5>
                <p className="card-text"><i><b>Author:</b></i> {product.author}</p>
                {/* <Link href={`/dashboard/bookdetail?productid=${product.id}`} className="btn btn-primary">View detail</Link> */}
                <Link href={{
                  pathname: `/dashboard/bookdetail`,
                  query: {
                    productid: `${product.trueID}`
                  },
                }} className="btn btn-outline-secondary">View detail</Link>
              </div>
            </div>

          ))}
        </div>
        <div className="text-center">
          <button onClick={handlePrevPage} className='btn btn-warning' disabled={currentPage === 1}>Previous Page</button>
          <span className="mx-2">Page {currentPage} of {totalPages}</span>
          <button onClick={handleNextPage} className='btn btn-warning' disabled={currentPage === totalPages}>Next Page</button>
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
