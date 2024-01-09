"use client";
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal } from 'react-bootstrap';
import React, { useState, useEffect ,useRef} from "react";
import Script from "next/script";
import { getBook } from "@/app/api/book_api";
import { Book } from "@/app/models/Book";
import axios from "axios";
import SearchBar from "@/app/components/searchbar/searchbarver2";
import { redirect } from "next/navigation";
export default function Bookdetail({
  searchParams,
}: {
  searchParams: {
    productid: string;
  };
}) {
  <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js" />;
  //function to get the book by id
  const domain =
    (process.env.NEXT_PUBLIC_PROTO ?? "") +
    (process.env.NEXT_PUBLIC_HOST ?? "") +
    process.env.NEXT_PUBLIC_PORT;
  const [book, setBook] = useState<Book>();
  const [today, setToday] = useState("");
  const [shownNotAvailable, setShownNotAvailable] = useState(false);
  const [bookingsuccess, setBookingsuccess] = useState(false);
  const productId = searchParams.productid;
  var ID: any;
  if (typeof window !== 'undefined') {
    // Perform localStorage action
    ID = localStorage.getItem("userID");
  }

  // const fetchData = () => {
  //   const data = getBook(productId)
  //     .then((data) => {
  //       const temp: Book = data;
  //       setBook(temp);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  useEffect(() => {
    
    const fetchData = () => {
      getBook(productId)
        .then((data) => {
          const temp: Book = data;
          setBook(temp);
        })
        .catch((err) => {
          console.log(err);
        });
    };
  
    fetchData();
  
    var searchValue: any;
    if (typeof window !== 'undefined') {
      searchValue = localStorage.getItem("searchValue");
    }
  
    if (searchValue && searchValue !== "") {
      localStorage.removeItem("searchValue");
      localStorage.setItem("newsearch", searchValue);
      redirect("./search?value=" + searchValue);
    } else {
      //console.log("no success")
    }
  }, [productId]);

  const [showModal, setShowModal] = useState(false);

  const handleBorrowClick = () => {
    if ((book && book.availability === 0) && (!bookingsuccess)) {
      const currentDate = new Date();
      const month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
      const day = currentDate.getDate().toString().padStart(2, '0');
      const year = currentDate.getFullYear();
      const formattedDate = `${year}-${month}-${day}`; // Format as YYYY-MM-DD for input type="date"
      setToday(formattedDate);

      setShowModal(true);
    } else {
      setShownNotAvailable(true);
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };
  // function handle modal
  const handleConfirm = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        domain + "/users/" + ID + "/reserve/" + productId,
      );
      console.log("Reservation confirmed!", response.data);
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error("Error confirming reservation:", error.message);
      } else {
        console.error("Unknown error:", error);
      }
    }
    setBookingsuccess(true);
  };

  return (
    <div>
      <SearchBar />
      <div style={{ fontFamily: "Inria Serif, serif" }} className="mx-4">
        <div>
          <p className="fs-1 fw-semibold mt-5 mb-4 mx-2 text-danger-emphasis text-center"></p>
          {/* Book detail infor */}
        </div>
        <div className="row">
          <div
            className="col-md-6 my-2 d-flex justify-content-center align-items-center"
            style={{ paddingRight: "25px", borderRight: "0.3px solid #333" }}
          >
            <button className="d-block rounded img-fluid border-0 mx-2 bg-transparent border-0">
              <img
                src={
                  book
                    ? book.image_url
                    : "https://i.ibb.co/yRsQjBX/extend-Sequence.png"
                }
                alt="book1"
                width="68%"
                // height="190"
                className="img-thumbnail"
              />
            </button>
          </div>
          <div className="col-md-6 px-3 fs-6 text-dark">
            <p className="fw-semibold fs-2 ">{book ? book.name : "NaN"}</p>
            <p>
              <b>Genre: &nbsp; </b> {book ? book.genre : "NaN"}
            </p>
            <p>
              <b>Author: &nbsp; </b> {book ? book.author : "NaN"}
            </p>
            <p>
              <b>Condition: &nbsp; </b>{" "}
              {book
                ? book.availability == 0
                  ? "Available"
                  : "Not available"
                : "NaN"}
            </p>
            <p>
              <b>Publisher: &nbsp; </b> {book ? book.publisher : "NaN"}
            </p>
            <p>
              <b>Publish date: &nbsp;</b>{" "}
              {book
                ? book.publishdate instanceof Date
                  ? book.publishdate.toLocaleDateString("en-US", {
                      month: "long",
                      day: "numeric",
                      year: "numeric",
                    })
                  : new Date(book.publishdate).toLocaleDateString("en-US", {
                      month: "long",
                      day: "numeric",
                      year: "numeric",
                    })
                : "02/04/2010"}
            </p>
            <p>
              <b>Pages:&nbsp;</b> {book ? book.totalpages.toString() : "0"}
            </p>
            <div className="mt-5 mb-3 row text-dark">
              <div className="col-md-2">
                <p>
                  <b>Description:</b>
                </p>
              </div>
              <div className="col-md-9">
                <p>{book ? book.description : "NaN"}</p>
                {ID ? (
                  <button
                    onClick={handleBorrowClick}
                    className="btn btn-dark rounded-5 my-2 me-4"
                  >
                    Borrow Now{" "}
                  </button>
                ) : null}
                <button className="btn btn-info rounded-5 text-dark">
                  Preview
                </button>
              </div>
            </div>
            {shownNotAvailable && (!bookingsuccess) && (
              <div className="alert alert-danger text-dark" role="alert">
                This book is not available.
              </div>
            )}
            {shownNotAvailable && (bookingsuccess) && (
              <div className="alert alert-warning text-dark" role="alert">
                You can not reserve twice !!
              </div>
            )}
            {bookingsuccess && (
              <div className="alert alert-success text-dark" role="alert">
                You&apos;ve just reserved this book successfully.<br></br>
                <b>
                  <u>Note</u>
                </b>
                : Remember to take the book <b>within 3 days</b> at the library.
                Otherwise, you will be fined by caution.
              </div>
            )}
          </div>
        </div>
        <Modal
      show={showModal}
      onHide={handleCloseModal}
      id="BookReserveModal"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <Modal.Header closeButton>
        <Modal.Title>Booking book reservation</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form onSubmit={handleConfirm}>
          <div className="mb-3 text-dark">
            <label htmlFor="bookName" className="form-label">
              Book
            </label>
            <input
              type="text"
              readOnly
              name="bookName"
              value={book ? book.name : ''}
              id="bookName"
              className="form-control"
            />
          </div>
          <div className="mb-3 text-dark">
            <label htmlFor="bookAuthor" className="form-label">
              Author
            </label>
            <input
              type="text"
              readOnly
              name="bookAuthor"
              value={book ? book.author : ''}
              id="bookAuthor"
              className="form-control"
            />
          </div>
          <div className="mb-3 text-dark">
            <label htmlFor="bookGenre" className="form-label">
              Genre
            </label>
            <input
              type="text"
              readOnly
              name="bookGenre"
              value={book ? book.genre : 'NaN'}
              id="bookGenre"
              className="form-control"
            />
          </div>
          <div className="mb-3 text-dark">
            <label htmlFor="bookDate" className="form-label">
              Reserve date:
            </label>
            <input
              type="date"
              name="bookDate"
              id="bookDate"
              className="form-control"
              value={today}
              readOnly
            />
          </div>
          <div className="mb-3 text-dark">
            <label htmlFor="confirmReservation">
              Do you want to reserve this book?
            </label>
          </div>
          <div className="mb-3">
            <button className="btn btn-primary me-3" type="submit" name="confirmReservation">
              Confirm
            </button>
            <button className="btn btn-danger" type="button" onClick={handleCloseModal}>
              Close
            </button>
          </div>
        </form>
      </Modal.Body>
    </Modal>
      </div>
    </div>
  );
}
