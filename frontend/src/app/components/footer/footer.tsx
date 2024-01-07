"use client";
import Image from "next/image";
import Link from "next/link";
import logo from "/public/thuvien.jpg";
const AppFooter = () => {
  return (
    <div>
      <div
        className="mt-5"
        style={{ paddingBottom: "2px", borderBottom: "1.7px solid #333" }}
      >
        <p></p>
      </div>
      <div
        className="bg-light bg-gradient px-2 text-primary-emphasis"
        style={{
          fontFamily: "Inria Serif, serif",
          padding: "50px 0px 30px 0px",
        }}
      >
        <div className="container mx-md-5 d-flex flex-column gap-5 flex-md-row">
          <div className="d-flex flex-column gap-2 w-full max-md-w-md">
            <h2 className="fs-2 fw-semibold">University Library</h2>
            <div className="rounded-3 d-flex justify-content-center align-items-center">
              <Image
                src={logo}
                alt="school"
                width="450"
                className="rounded-3"
              />
            </div>
          </div>
          <div className="d-flex mx-md-5 flex-column gap-2 w-full ">
            <h2 className="fs-2 fw-semibold">Website</h2>
            <div className="d-flex flex-column gap-2 text-primary-emphasis fs-6">
              <Link
                href={"https://hcmut.edu.vn"}
                className="text-decoration-none text-primary-emphasis fst-italic text-decoration-underline"
              >
                HCMUT
              </Link>
              <Link
                href={"https://hcmut.edu.vn"}
                className="text-decoration-none text-primary-emphasis fst-italic text-decoration-underline"
              >
                MyBK
              </Link>
              <Link
                href={"https://hcmut.edu.vn"}
                className="text-decoration-none text-primary-emphasis fst-italic text-decoration-underline"
              >
                BKSI
              </Link>
            </div>
          </div>
          <div className="d-flex mx-md-5 flex-column gap-2 w-full">
            <h2 className="fs-2 fw-semibold">Address</h2>
            <div className="d-flex flex-column gap-2 fs-6">
              <p>268 Ly Thuong Kiet Street, Ward 14, District 10, HCM City</p>
              <p>(028) 38 651 670 - (028) 38 647 256</p>
              <p>pdt@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppFooter;
