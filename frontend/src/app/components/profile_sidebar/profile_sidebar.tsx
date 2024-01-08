"use client"
import Link from "next/link";
export default function ProfileSidebar(): React.JSX.Element {
  return (
    <nav className="nav flex-column py-3 shadow-sm rounded-4">
      <Link className="nav-link text-black" href="account">
        <i className="bi bi-person-bounding-box"></i> Account
      </Link>
      <Link className="nav-link text-black" href="reservation">
        <i className="bi bi-bookmark-plus"></i> Reservations
      </Link>
      <Link className="nav-link text-black" href="borrow">
        <i className="bi bi-journal"></i> Borrow
      </Link>
    </nav>
  );
}
