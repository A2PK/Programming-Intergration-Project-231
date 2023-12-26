import Link from "next/link";
export default function ProfileSidebar(): React.JSX.Element {
  return (
    <nav className="nav flex-column py-3 shadow-sm rounded-4">
      <Link className="nav-link text-black" href="account">
        Account
      </Link>
      <Link className="nav-link text-black" href="reservation">
        Reservations
      </Link>
      <Link className="nav-link text-black" href="borrow">
        Borrow
      </Link>
    </nav>
  );
}
