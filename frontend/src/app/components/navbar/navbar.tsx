// components/NavBar.tsx
import Link from 'next/link';
import "./navbar.css"

const NavBar: React.FC = () => {
  return (
    <nav>      <ul>
        <li>
          <Link href="/dashboard/homepage">
            Home
          </Link>
        </li>
        <li>
          <Link href="auth/login">
              Login
          </Link>
        </li>
        {/* Add more navigation items as needed */}
      </ul>
    </nav>
  );
};

export default NavBar;
