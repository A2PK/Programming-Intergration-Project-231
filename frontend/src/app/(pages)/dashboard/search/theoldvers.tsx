"use client"
import Image from "next/image";
import book1 from "/public/book3.jpg";
import Carousel from "@/app/components/carousel/carouselver2";
const SearchPage = () => {
  return (
    <div className='container-fluid' style={{ fontFamily: 'Inria Serif, serif' }}>
      <Carousel />
      <div>
        <p className="text-center mx-4 mt-3 fs-2 justify-center fst-italic fw-semibold text-danger-emphasis" style={{ fontFamily: 'Inria Serif, serif' }}>All books</p>
      </div>
      <div className="row row-cols-1 row-cols-sm-5 justify-content-center gap-1" >
        <div className="card col mb-3">
          <div className="">
            <Image
              src={book1}
              alt="book3"
              style={{ height: '18em' }}
            />
          </div>
          <div className="card-body">
            <h5 className="card-title">Empty title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up</p>
            <a href="#" className="btn btn-primary">View detail</a>
          </div>
        </div>
        <div className="card col mb-3">
          <div className="">
            <Image
              src={book1}
              alt="book3"
              style={{ height: '18em' }}
            />
          </div>
          <div className="card-body">
            <h5 className="card-title">Empty title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up</p>
            <a href="#" className="btn btn-primary">View detail</a>
          </div>
        </div>
        <div className="card col mb-3">
          <div className="">
            <Image
              src={book1}
              alt="book3"
              style={{ height: '18em' }}
            />
          </div>
          <div className="card-body">
            <h5 className="card-title">Empty title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up</p>
            <a href="#" className="btn btn-primary">View detail</a>
          </div>
        </div>
        <div className="card col mb-3">
          <div className="">
            <Image
              src={book1}
              alt="book3"
              style={{ height: '18em' }}
            />
          </div>
          <div className="card-body">
            <h5 className="card-title">Empty title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up</p>
            <a href="#" className="btn btn-primary">View detail</a>
          </div>
        </div>
        <div className="card col mb-3">
          <div className="">
            <Image
              src={book1}
              alt="book3"
              style={{ height: '18em' }}
            />
          </div>
          <div className="card-body">
            <h5 className="card-title">Empty title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up</p>
            <a href="#" className="btn btn-primary">View detail</a>
          </div>
        </div>
        <div className="card col mb-3">
          <div className="">
            <Image
              src={book1}
              alt="book3"
              style={{ height: '18em' }}
            />
          </div>
          <div className="card-body">
            <h5 className="card-title">Empty title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up</p>
            <a href="#" className="btn btn-primary">View detail</a>
          </div>
        </div>
        <div className="card col mb-3">
          <div className="">
            <Image
              src={book1}
              alt="book3"
              style={{ height: '18em' }}
            />
          </div>
          <div className="card-body">
            <h5 className="card-title">Empty title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up</p>
            <a href="#" className="btn btn-primary">View detail</a>
          </div>
        </div>
        <div className="card col mb-3">
          <div className="">
            <Image
              src={book1}
              alt="book3"
              style={{ height: '18em' }}
            />
          </div>
          <div className="card-body">
            <h5 className="card-title">Empty title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up</p>
            <a href="#" className="btn btn-primary">View detail</a>
          </div>
        </div>
        <div className="card col mb-3">
          <div className="">
            <Image
              src={book1}
              alt="book3"
              style={{ height: '18em' }}
            />
          </div>
          <div className="card-body">
            <h5 className="card-title">Empty title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up</p>
            <a href="#" className="btn btn-primary">View detail</a>
          </div>
        </div>
        <div className="card col mb-3">
          <div className="">
            <Image
              src={book1}
              alt="book3"
              style={{ height: '18em' }}
            />
          </div>
          <div className="card-body">
            <h5 className="card-title">Empty title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up</p>
            <a href="#" className="btn btn-primary">View detail</a>
          </div>
        </div>
        <div className="card col mb-3">
          <div className="">
            <Image
              src={book1}
              alt="book3"
              style={{ height: '18em' }}
            />
          </div>
          <div className="card-body">
            <h5 className="card-title">Empty title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up</p>
            <a href="#" className="btn btn-primary">View detail</a>
          </div>
        </div>
        <div className="card col mb-3">
          <div className="">
            <Image
              src={book1}
              alt="book3"
              style={{ height: '18em' }}
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
  )
}
export default SearchPage