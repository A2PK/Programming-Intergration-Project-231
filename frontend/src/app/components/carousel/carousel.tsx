'use client'
import Image from "next/image";
import Head from 'next/head';
import logo from "/public/thuvien.jpg";
import Script from 'next/script'
const Carousel = () => {
  return (
    <div id="main">
      <div className="container">
        <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js" />
        <div id="carousel-simple" className="carousel slide col-md-6 col-md-offset-3" data-bs-ride="carousel">
          {/* Indicators */}
          <ol className="carousel-indicators">
            <li data-bs-target="#carousel-simple" data-bs-slide-to="0" className="active"></li>
            <li data-bs-target="#carousel-simple" data-bs-slide-to="1"></li>
            <li data-bs-target="#carousel-simple" data-bs-slide-to="2"></li>
            <li data-bs-target="#carousel-simple" data-bs-slide-to="3"></li>
          </ol>

          {/* Wrapper for slides */}
          <div className="carousel-inner" role="listbox">
            <div className="carousel-item active">
              <Image
                src={logo}
                alt="book3"
                // width="200" 
                // height="190"
                className="d-block w-100"
              />
            </div>
            <div className="carousel-item">
              <Image
                src={logo}
                alt="book3"
                // width="200" 
                // height="190"
                className="d-block w-100"
              />
            </div>
            <div className="carousel-item">
              <Image
                src={logo}
                alt="book3"
                // width="200" 
                // height="190"
                className="d-block w-100"
              />
            </div>
            <div className="carousel-item">
              <Image
                src={logo}
                alt="book3"
                // width="200" 
                // height="190"
                className="d-block w-100"
              />
            </div>
          </div>

          {/* Controls */}
          <a className="carousel-control-prev" href="#carousel-simple" role="button" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </a>
          <a className="carousel-control-next" href="#carousel-simple" role="button" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </a>
        </div>
      </div>
    </div>
  )
}
export default Carousel