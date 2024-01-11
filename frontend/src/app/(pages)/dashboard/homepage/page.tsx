"use client";
import SearchBar from "@/app/components/searchbar/searchbarver2";
import React, { useState, useEffect } from "react";
import { redirect } from "next/navigation";
import Link from "next/link";
export default function Homepage() {
  useEffect(() => {
    var searchValue: any;
  if (typeof window !== 'undefined') {
    searchValue = localStorage.getItem("searchValue");
  }
    if (searchValue && searchValue != "") {
      localStorage.removeItem("searchValue");
      localStorage.setItem("newsearch", searchValue);
      redirect("./search?value=" + searchValue);
    } else {
      //console.log("no success");
    }
  }, []);
  return (
    <div>
      <SearchBar />
      <div className="d-sm-float d-md-flex p-md-5 mx-md-5 my-md-3 my-5 mx-3 ">
        <div
          style={{ fontFamily: "Inria Serif, serif" }}
          className="col-md-6 col-12"
        >
          <div>
            <p className="fs-1 fw-semibold text-danger-emphasis">
              The Psychology of Money
            </p>
            <p className="fs-5 fw-light fst-italic text-dark" style={{ width: "85%" }}>
              The Psychology of Money is a book written by Morgan Housel that
              explores the psychology behind the way people approach and think
              about money. The book discusses various topics such as how money
              affects happiness.
            </p>
            <br></br>
            <Link href={"./search"} onClick={() => localStorage.removeItem("newsearch")}>
              <button className="btn btn-dark rounded-5 fs-5 my-2 text-white">
                Read More{" "}
              </button>
            </Link>
            &nbsp;&nbsp;&nbsp;
            <Link
              href={{
                pathname: `/dashboard/bookdetail`,
                query: {
                  productid: "65967684e79890fdef0704c0",
                },
              }}
            >
              <button className="btn btn-info rounded-5 fs-5 text-dark">
                Borrow Now
              </button>
            </Link>
          </div>
          <div>
            <br></br>
            <p className="fs-1 fw-semibold mt-5 mb-5 text-danger-emphasis">
              This week popular books
            </p>
            <div className="d-md-flex justify-between">
              <div className="mx-2 text-center">
                <Link
                  href={{
                    pathname: `/dashboard/bookdetail`,
                    query: {
                      productid: "6596767de79890fdef0704bb",
                    },
                  }}
                >
                  <button className="d-inline-block rounded-3 border-0 ">
                    <img
                      src="https://i.ibb.co/dJ4sjtb/death-s-head.jpg"
                      alt="book1"
                      width="200"
                      //height="400"
                      className="rounded-3"
                    />
                  </button>
                </Link>
                <p className="text-md-center mt-1 text-dark">Death&apos;s Head</p>
              </div>
              <div className="mx-2 text-center">
                <Link
                  href={{
                    pathname: `/dashboard/bookdetail`,
                    query: {
                      productid: "65967681e79890fdef0704bd",
                    },
                  }}
                >
                  <button className="d-inline-block rounded-3 border-0 ">
                    <img
                      src="https://i.ibb.co/ZBGmk9Y/the-night-shift.jpg"
                      alt="book1"
                      width="200"
                      //height="400"
                      className="rounded-3"
                    />
                  </button>
                </Link>
                <p className="text-md-center mt-1 text-dark">The Night Shift</p>
              </div>
              <div className="mx-2 text-center">
                <Link
                  href={{
                    pathname: `/dashboard/bookdetail`,
                    query: {
                      productid: "6596749de79890fdef0704b9",
                    },
                  }}
                >
                  <button className="d-inline-block rounded-3 border-0 ">
                    <img
                      src="https://i.ibb.co/p0pjwf2/the-wager.jpg"
                      alt="book1"
                      width="200"
                      //height="400"
                      className="rounded-3"
                    />
                  </button>
                </Link>
                <p className="text-md-center mt-1 text-dark" >The Wager</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-2">
          <p></p>
        </div>
        <div
          className="d-block col-md-4 col-12"
          style={{ fontFamily: "Inria Serif, serif" }}
        >
          <p className="fs-1 fw-semibold text-warning-emphasis text-center">
            Best Seller This Week
          </p>
          <Link
            href={{
              pathname: `/dashboard/bookdetail`,
              query: {
                productid: "65967684e79890fdef0704c0",
              },
            }}
          >
            <button className="bg-transparent border-0">
              <img
                src="https://i.ibb.co/tsG85fj/the-psy.jpg"
                alt="book3"
                className="rounded-2 img-fluid mt-2 mb-3"
                style={{ width: "100%" }}
              />
            </button>
          </Link>
          <p className="text-center fst-italic fw-semibold fs-4 text-dark">
            No 1. The Psychology of Money
          </p>
          <p className="text-center fw-normal fs-5 text-dark">Author: Morgan Housel</p>
        </div>
      </div>
    </div>
  );
}
