import { useParams, useNavigate } from "react-router-dom";
import { movies } from "../data/movies";
import "../App.css";

export default function MovieDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const movie = movies.find(m => m.id === Number(id));

  return (
    <div className="container">
      <h2>{movie?.title}</h2>
      <img src={movie?.image} width="300" />
      <br /><br />

      <button onClick={() => navigate("/book")}>
        Book Seat
      </button>
    </div>
  );
}
