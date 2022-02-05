export default function ShowItems(props) {
  
  return (
    <div className="col">
      <div className="card cardItem border-0 shadow bg-body rounded d-flex">
        <img
          src={props.img}
          className="card-img-top fitimage"
          alt={props.title}
        />
        <div className="card-body d-flex flex-column">
          <h5 className="card-title text-center">{props.title}</h5>
          <p className="card-text">{props.desc}...</p>
          
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Authors: {props.author}</li>
          <li className="list-group-item">Published Date: {props.published}</li>
          <li className="list-group-item">Publisher: {props.publisher}</li>
        </ul>
        <div className="card-body1">
          <a href={props.infolink} className="card-link" target="_blank" rel="noreferrer">
          Info
          </a>
         
        </div>
      </div>
      </div>
  );
}
