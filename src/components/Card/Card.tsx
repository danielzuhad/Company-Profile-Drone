import { Link } from "react-router-dom";
import "./Card.css";
import "./Card.css";

export const Card = ({
  imgSrc,
  title,
  id,
}: {
  id: number;
  imgSrc: string;
  title: string;
}) => {
  return (
    <div className="card-container">
      <img src={imgSrc} alt="" className="card-img" />

      <h1 className="card-title">{title}</h1>

      <div className="button-container">
        <button className="button-card">Buy</button>
        <Link to={`/products/${id}`} className="button-card">
          Detail
        </Link>
      </div>
    </div>
  );
};
