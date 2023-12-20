"use client"
import { useState } from 'react';
import Image from "next/image";
import book1 from "/public/book3.jpg";
import Carousel from "@/app/components/carousel/carouselver2";

const SearchPage = () => {
  const products = Array.from({ length: 24 }).map((_, index) => ({
    id: index + 1,
    title: `Dac Nhan Tam ${index + 1}`,
    description: 'Some quick example text to build on the card title and make up',
    image: book1,
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
    <div className='container-fluid' style={{ fontFamily: 'Inria Serif, serif' }}>
      <Carousel />
      <div>
        <p className="text-center mx-4 mt-3 fs-2 justify-center fst-italic fw-semibold text-danger-emphasis" style={{ fontFamily: 'Inria Serif, serif' }}>All books</p>
      </div>
      <div className="row row-cols-1 row-cols-sm-5 justify-content-center gap-1">
        {currentProducts.map((product) => (
          <div key={product.id} className="card col mb-3">
            <div className="">
              <Image
                src={product.image}
                alt={product.title}
                style={{ height: '18em' }}
              />
            </div>
            <div className="card-body">
              <h5 className="card-title">{product.title}</h5>
              <p className="card-text">{product.description}</p>
              <a href="#" className="btn btn-primary">View detail</a>
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
  );
};

export default SearchPage;
