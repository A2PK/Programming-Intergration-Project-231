"use client";
import Link from "next/link";
import SearchBar from "@/app/components/searchbar/searchbarver2";
import React, { useState, useEffect } from "react";
import axios from "axios";
import "./search.css";
import { redirect } from "next/navigation";
import { Loading } from "@/app/components/loading/loading";

const SearchPage = () => {
  const [bookdata, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const domain =
    (process.env.NEXT_PUBLIC_PROTO ?? "") +
    (process.env.NEXT_PUBLIC_HOST ?? "") +
    process.env.NEXT_PUBLIC_PORT;
  useEffect(() => {
    var searchValue: any;
    if (typeof window !== "undefined") {
      searchValue = localStorage.getItem("searchValue");
    }
    if (searchValue && searchValue !== "") {
      localStorage.removeItem("searchValue");
      localStorage.setItem("newsearch", searchValue);
      redirect("./search?value=" + searchValue);
    } else {
      //console.log("no success");
    }
    if (typeof window !== "undefined") {
      searchValue = localStorage.getItem("newsearch");
    }
    if (searchValue && searchValue !== "") {
      axios
        .get(domain + "/books/search/" + searchValue, {
          headers: { Authorization: "Bearer " + localStorage.getItem("token") },
        })
        .then((res) => {
          setData(res.data);
          localStorage.removeItem("newsearch");
          setIsLoading(false);
        })
        .catch((err) => console.log(err));
      //localStorage.removeItem("newsearch");
    } else if (searchValue && searchValue == "") {
      //console.log("no success");
      axios
        .get(domain + "/books/getAll", {
          headers: { Authorization: "Bearer " + localStorage.getItem("token") },
        })
        .then((res) => {
          setData(res.data);
          setIsLoading(false);
        }) //setData(res.data.items)
        .catch((err) => console.log(err));
    } else if (!searchValue) {
      axios
        .get(domain + "/books/getAll", {
          headers: { Authorization: "Bearer " + localStorage.getItem("token") },
        })
        .then((res) => {
          setData(res.data);
          setIsLoading(false);
        }) //setData(res.data.items)
        .catch((err) => console.log(err));
    }
  }, [domain]);

  const products = bookdata.map((book: any, index: number) => ({
    id: index + 1,
    title: book.name || "No Title",
    author:
      book.author ||
      "Some quick example text to build on the card title and make up",
    image: book.image_url || "/default_image_url.png",
    trueID: book.id || "65967338e79890fdef0704b8",
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

  if (isLoading) {
    return (
      <>
        <SearchBar />
        <div className="my-3">
          <Loading />
        </div>
      </>
    );
  }

  return (
    <div>
      <SearchBar />

      <div
        className="container-fluid"
        style={{ fontFamily: "Inria Serif, serif" }}
      >
        <div className="mt-5 row row-cols-1 row-cols-sm-5 justify-content-center gap-1">
          {currentProducts.map((product) => (
            <div key={product.id} className="card col mb-4 p-0 mx-2">
              <div className="myDiv">
                <img
                  src={product.image}
                  alt={product.title}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </div>
              <div className="card-body">
                <h5 className="card-title">
                  <b className="fs-5">{product.title}</b>
                </h5>
                <p className="card-text">
                  <i>
                    <b>Author:</b>
                  </i>{" "}
                  {product.author}
                </p>
                <Link
                  href={{
                    pathname: `/dashboard/bookdetail`,
                    query: {
                      productid: `${product.trueID}`,
                    },
                  }}
                  className="btn btn-outline-secondary"
                >
                  View detail
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center">
          <button
            onClick={handlePrevPage}
            className="btn btn-warning"
            disabled={currentPage === 1}
          >
            Previous Page
          </button>
          <span className="mx-2 text-dark">
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={handleNextPage}
            className="btn btn-warning"
            disabled={currentPage === totalPages}
          >
            Next Page
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
