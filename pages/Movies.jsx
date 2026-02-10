import { movies } from "../data/movies";
import { Link } from "react-router-dom";
import "../App.css";

export default function Movies() {
  return (
    <div className="container">
      <h2>Movie List</h2>

      <div className="movie-grid">
        {movies.map(m => (
          <Link key={m.id} to={`/movie/${m.id}`} className="movie-card">
            <img src={m.image} />
            <p>{m.title}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
