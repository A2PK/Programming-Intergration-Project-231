const SearchBar = () => {
  return <div className="searchbar">
    <div className="searchbar_searchbox">
    <p style={{ marginRight: '1rem' }}>Read Your Favorite Book</p>
    <input type="text" placeholder="Search by Name/ISBN" />
    <button>Search</button>
    </div>
  </div>;
}

export default SearchBar;