import ShowItems from "./ShowItems";
//import axios from "axios";
import { useState, useEffect } from "react";
// Redux vs Context Api
const Searchinput = () => {
  const [value, setValue] = useState("");
  const [data, setData] = useState([]);
  const uri = "https://www.googleapis.com/books/v1/volumes?q=";

  useEffect(() => {
    if (value.length > 2) {
      fetch(uri + value)
        .then((res) => res.json())
        .then((res) => {
          console.log(res.items);
          setData(res.items);
        });
    }
  }, [value]); // useEffect araştır.

  const changeValue = (e) => {
    setValue(e.target.value);
  };

  return (
    <>
      <div className="input-group mb-3 m-auto w-50">
        <input
          type="text"
          className="form-control"
          placeholder="Search with book name..."
          value={value}
          onChange={changeValue}
        />
      </div>
      <div className="row row-cols-1 row-cols-md-3 mt-3 rowItem g-4">
        {data.map((i) => (
          <ShowItems
            key={i.id}
            title={i.volumeInfo.title.slice(0,87)}
            img={
              i.volumeInfo?.imageLinks?.thumbnail
                ? i.volumeInfo.imageLinks.thumbnail
                : "https://via.placeholder.com/262x370?text=No+Image"
            }
            desc={i.volumeInfo?.description ? i.volumeInfo.description.slice(0,100) : 'No description data'}
            author={i.volumeInfo.authors}
            infolink={i.volumeInfo.infoLink}
            published={i.volumeInfo.publishedDate}
            publisher={i.volumeInfo.publisher ? i.volumeInfo.publisher : i.volumeInfo.authors }
          />
        ))}
      </div>
    </>
  );
};

export default Searchinput;
