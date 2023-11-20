import NavBar from "./components/navbar/navbar";
import SearchBar from "./components/serachbar/searchbar";
import "./page.module.css";

export default function RootPage() {
  return (
    <main>
      <div>
        <NavBar />
        <SearchBar />
      </div>
      <h1 style={{ padding: '1rem' }}>Welcome to University Library Management System rootpage!</h1>
    </main>
  );
}
