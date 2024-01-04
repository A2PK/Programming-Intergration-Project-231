'use client'
import Image from "next/image";
import book1 from "/public/book3.jpg";
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal } from 'bootstrap';
import React, { useState, useEffect } from "react";
import Script from 'next/script';
import { getBook } from "@/app/api/book_api";
import { Book } from "@/app/models/Book";
import axios from 'axios';
import SearchBar from "@/app/components/searchbar/searchbarver2";
import { redirect } from "next/navigation";
export default function Bookdetail({
    searchParams,
}: {
    searchParams: {
        productid: string;
    };
}) {
    <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js" />
    //function to get the book by id
    const [book, setBook] = useState<Book>();
    const [today, setToday] = useState('');
    const [shownNotAvailable, setShownNotAvailable] = useState(false);
    const [bookingsuccess, setBookingsuccess] = useState(false);
    const productId = searchParams.productid;
    
    const fetchData = () => {
        const data = getBook(productId)
            .then((data) => {
                const temp: Book = data;
                setBook(temp);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    useEffect(() => {
        fetchData();

        const searchValue = localStorage.getItem('searchValue');
        if (searchValue && searchValue != "") {
            redirect("./search?value=" + searchValue);
        } else {
            console.log("no success")
        }
    }, []);

    const handleBorrowClick = () => {
        if (book && !book.condition) {
            setShownNotAvailable(true);
        } else {
            const modalElement = document.getElementById('BookReserveModal');
            if (modalElement) {
                const currentDate = new Date();
                const month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
                const day = currentDate.getDate().toString().padStart(2, '0');
                const year = currentDate.getFullYear();
                const formattedDate = `${year}-${month}-${day}`; // Format as YYYY-MM-DD for input type="date"
                setToday(formattedDate);
                const myModal = new Modal(modalElement);
                myModal.show();
            }
        }
    };
    // function handle modal
    const handleConfirm = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();   
            try {
                const response = await axios.post('http://localhost:8080/books/reserve', {
                    userID: "ddd",
                    bookID: productId, //string
                });
                console.log('Reservation confirmed!', response.data);
            } catch (error: unknown) {
                if (error instanceof Error) {
                    console.error('Error confirming reservation:', error.message);
                } else {
                    console.error('Unknown error:', error);
                }
            }
            setBookingsuccess(true);
    };


    return (
        <div>
            <SearchBar />
            <div style={{ fontFamily: 'Inria Serif, serif' }} className="mx-4">
                <div>
                    <p className="fs-1 fw-semibold mt-5 mb-4 mx-2 text-danger-emphasis">Book Detail Information</p>
                </div>
                <div className="row">
                    <div className="col-md-6 my-2 d-flex justify-content-center align-items-center" style={{ paddingRight: '25px', borderRight: '0.3px solid #333' }}>
                        <button className="d-block rounded img-fluid border-0 mx-2">
                            <img
                                src={book ? book.image_url : "https://i.ibb.co/yRsQjBX/extend-Sequence.png"}
                                alt="book1"
                                width="100%"
                                // height="190"
                                className="img-thumbnail"
                            />
                        </button>
                    </div>
                    <div className="col-md-6 px-3">
                        <p className="fw-semibold fs-2">{book ? book.name : "NaN"}</p>
                        <p>Genre: <b>{book ? book.genre : "NaN"}</b></p>
                        <p>Author: <b>{book ? book.author : "NaN"}</b></p>
                        <p>Condition: <b>{book ? (book.condition ? "Available" : "No available") : "NaN"}</b></p>
                        <p>Publisher: <b>{book ? book.publisher : "NaN"}</b></p>
                        <p>
                            Publish date:{' '}
                            <b>
                                {book
                                    ? (
                                        book.publishdate instanceof Date
                                            ? book.publishdate.toLocaleDateString('en-US')
                                            : new Date(book.publishdate).toLocaleDateString('en-US')
                                    )
                                    : '02/04/2010'}
                            </b>
                        </p>
                        <p>Pages: <b>{book ? book.totalpages : 0}</b></p>
                        <div className="mt-5 mb-3 row">
                            <div className="col-md-2"><p>Description:</p></div>
                            <div className="col-md-9"><p>{book ? book.description : "NaN"}</p>
                                <button onClick={handleBorrowClick} className="btn btn-dark rounded-5 my-2">Borrow Now </button>&nbsp;&nbsp;&nbsp;
                                <button className="btn btn-info rounded-5 text-dark">Preview</button>
                            </div>
                        </div>
                        {shownNotAvailable && (
                            <div className="alert alert-danger" role="alert">
                                This book is not available.
                            </div>
                        )}
                        {bookingsuccess && (
                            <div className="alert alert-success" role="alert">
                                You've just reserved this book successfully.<br></br>
                                <b><u>Note</u></b>: Remember to take the book <b>within 3 days</b> at the library. Otherwise, you will be fined by caution.
                            </div>
                        )}
                    </div>
                </div>
                <div className="modal" id="BookReserveModal" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h4 className="modal-title">Booking book reservation</h4>
                                <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                            </div>
                            <div className="modal-body">
                                <div className="row">
                                    <div className="col-md-12">
                                        <form action="" method="post" onSubmit={handleConfirm}>
                                            <div className="form-group mb-2">
                                                <label htmlFor="">Book</label>
                                                <input required type="text" readOnly name="bookName" value={book ? book.name : ""} id="bookName" className="form-control" />
                                            </div>
                                            <div className="form-group mb-2">
                                                <label htmlFor="">Author</label>
                                                <input required type="text" readOnly name="bookAuthor" value={book ? book.author : ""} id="bookAuthor" className="form-control" />
                                            </div>
                                            <div className="form-group mb-2">
                                                <label htmlFor="">Genre</label>
                                                <input required type="text" readOnly name="bookGenre" value={book ? book.genre : "NaN"} id="bookGenre" className="form-control" />
                                            </div>
                                            <div className="form-group mb-2">
                                                <label htmlFor="">Reserve date:</label>
                                                <input
                                                    required
                                                    type="date"
                                                    name="bookDate"
                                                    id="bookDate"
                                                    className="form-control"
                                                    value={today}
                                                    readOnly
                                                />
                                            </div>
                                            <div className="form-group mb-2">
                                                <label htmlFor="">Do you want to reserve this book ?</label>
                                            </div>
                                            <div className="form-group">
                                                <button className="btn btn-primary" type="submit" name="patientcancel">Confirm</button>
                                                <button type="button" className="btn btn-danger mx-2" data-bs-dismiss="modal">Close</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}