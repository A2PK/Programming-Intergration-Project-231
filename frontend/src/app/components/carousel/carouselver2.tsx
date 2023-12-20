'use client'
import Image from "next/image";
import React, { useEffect } from 'react';
import $ from 'jquery';
import book1 from "/public/book3.jpg";
import book2 from "/public/book2.jpeg";
import book3 from "/public/book1.webp";
import book4 from "/public/psy.jpg";
import logo from "/public/thuvien.jpg";
import Script from 'next/script'
import "./carousel.css"
const Carousel = () => {
    useEffect(() => {
        <Script src="https://code.jquery.com/jquery-3.7.1.slim.min.js" />
        if (window.matchMedia("(min-width:576px)").matches) {
            var carouselWidth = $('.carousel-inner')[0].scrollWidth;
            var cardWidth = $('.carousel-item').width();
            var scrollPosition = 0;

            $('.carousel-control-next').on('click', function () {
                if (scrollPosition < (carouselWidth - ((cardWidth as number) * 4))) {
                    console.log('next');
                    scrollPosition = scrollPosition + (cardWidth as number);
                    $('.carousel-inner').animate({ scrollLeft: scrollPosition }, 600);
                }
            });
            $('.carousel-control-prev').on('click', function () {
                if (scrollPosition > 0) {
                    console.log('prev');
                    scrollPosition = scrollPosition - (cardWidth as number);
                    $('.carousel-inner').animate({ scrollLeft: scrollPosition }, 600);
                }
            });
        } else {
            //multipleItemCarousel.classList.add('slide');
        }

    }, []);
    return (
        <div>
            <div>
                <p className="text-center mx-4 mt-3 fs-2 justify-center fst-italic fw-semibold text-danger-emphasis" style={{ fontFamily: 'Inria Serif, serif' }}>The most popular books</p>
            </div>
            <div id="carouselExampleControls" className="carousel" data-bs-ride="carousel" style={{ fontFamily: 'Inria Serif, serif' }}>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className="card col">
                            <div className="img-wrapper">
                                <Image
                                    src={logo}
                                    alt="book3"
                                />
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">General Library Course</h5>
                                <p className="card-text">Show you how to build a real library, leave you a small emaotion of chillless</p>
                                <a href="#" className="btn btn-primary">View detail</a>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="card col">
                            <div className="img-wrapper">
                                <Image
                                    src={book1}
                                    alt="book3"
                                />
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">Dac Nhan Tam</h5>
                                <p className="card-text">The content is mainly about how you work with society</p>
                                <a href="#" className="btn btn-primary">View detail</a>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="card col">
                            <div className="img-wrapper">
                                <Image
                                    src={book2}
                                    alt="book3"
                                />
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">Left Genious, Right on Lunatic</h5>
                                <p className="card-text">Tell you some aspects about lunatic and genious</p>
                                <a href="#" className="btn btn-primary">View detail</a>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="card col">
                            <div className="img-wrapper">
                                <Image
                                    src={book3}
                                    alt="book3"
                                />
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">Tet O Lang Dia Nguc</h5>
                                <p className="card-text">Tell you some hell story about a small village on the old moutain</p>
                                <a href="#" className="btn btn-primary">View detail</a>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="card col">
                            <div className="img-wrapper">
                                <Image
                                    src={book4}
                                    alt="book3"
                                />
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">The Psychology Of Money</h5>
                                <p className="card-text">Some trick to steal money, spend on time to waste $ first</p>
                                <a href="#" className="btn btn-primary">View detail</a>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="card col">
                            <div className="img-wrapper">
                                <Image
                                    src={book1}
                                    alt="book3"
                                />
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">Empty title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up</p>
                                <a href="#" className="btn btn-primary">View detail</a>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="card col">
                            <div className="img-wrapper">
                                <Image
                                    src={logo}
                                    alt="book3"
                                />
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">Empty title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up</p>
                                <a href="#" className="btn btn-primary">View detail</a>
                            </div>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}
export default Carousel