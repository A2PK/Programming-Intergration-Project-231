'use client'
import Image from "next/image";
import book1 from "/public/book3.jpg";
import book2 from "/public/book2.jpeg";
import book3 from "/public/book1.webp";
import book4 from "/public/psy.jpg";
import SearchBar from "@/app/components/searchbar/searchbarver2";
import React, { useState, useEffect } from 'react';
import { redirect } from "next/navigation";
export default function Homepage() {
  useEffect(() => {
    // Retrieve search value from localStorage
    const searchValue = localStorage.getItem('searchValue');

    // Filter products based on search value
    if (searchValue && searchValue!="") {      
        redirect("./search?value="+searchValue);
    } else {
      console.log("no success")
    }
  }, []);
  return (
    <div>
    <SearchBar />
    <div className="d-sm-float d-md-flex p-md-5 mx-md-5 my-md-3 my-5 mx-3 ">
      <div style={{ fontFamily: 'Inria Serif, serif' }} className="col-md-6 col-12">
        <div>
          <p className="fs-1 fw-semibold text-danger-emphasis">The Psychology of Money</p>
          <p className="fs-5 fw-light fst-italic" style={{ width: '85%' }}>The Psychology of Money is a book written by Morgan Housel that explores the psychology behind the way people approach and think about money.
            The book discusses various topics such as how money affects happiness.</p><br></br>
          <button className="btn btn-dark rounded-5 fs-5 my-2">Read More </button>&nbsp;&nbsp;&nbsp;
          <button className="btn btn-info rounded-5 fs-5 text-dark">Borrow Now</button>
        </div>
        <div>
          <br></br>
          <p className="fs-1 fw-semibold mt-5 mb-5 text-danger-emphasis">Best Authors Book This Week</p>
          <div className="d-md-flex justify-between">
            <div className="mx-2 text-center">
              <button className="d-inline-block rounded-3 border-0 ">
                <Image
                src={book1}
                alt="book1"
                width="200" 
                height="190"
                className="rounded-3"
              />
              </button>   
              <p className="text-md-center mt-1">Đắc Nhân Tâm</p>
            </div>
            <div className="mx-2 text-center">
            <button className="d-inline-block rounded-3 border-0 ">
                <Image
                src={book2}
                alt="book2"
                width="200" 
                height="190"
                className="rounded-3"
              />
              </button>
              <p className="text-md-center mt-1">Thiên Tài Bên Trái, Kẻ Điên Bên Phải</p>
            </div>
            <div className="mx-2 text-center">
            <button className="d-inline-block rounded-3 border-0 ">
                <Image
                src={book3}
                alt="book3"
                width="200" 
                height="190"
                className="rounded-3"
              />
              </button>
              <p className="text-md-center mt-1">Tết Ở Làng Địa Ngục</p>
            </div>
          </div>
        </div>
        
      </div>
      <div className="col-md-2">
          <p></p>
        </div>
      <div className="d-block col-md-4 col-12" style={{ fontFamily: 'Inria Serif, serif' }}>
      <p className="fs-1 fw-semibold text-warning-emphasis text-center">Best Seller This Week</p>
      <Image
                src={book4}
                alt="book3"
                // width="500" 
                // height="170"
                className="rounded-circle img-fluid mt-2 mb-3"
                style={{ width: '100%' }}
              />
              <p className="text-center fst-italic fw-semibold fs-4">No 1. The Psychology of Money</p>
              <p className="text-center fw-normal fs-5">Author: Morgan Housel</p>
      </div>
    </div>
    </div>
  )
}
