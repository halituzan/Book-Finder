import "./components.css";
import Searchinput from "./SearchInput";

export default function SearchData() {
  
  return (
    <div className="search container my-5">
      <a href="/"><h1 className="text-center my-5 logo w-50 m-auto text-light">Book Finder</h1></a>
      <Searchinput/>
    </div>
  );
}
