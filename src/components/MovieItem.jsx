import { CinemaApiContext } from "../context/CinemaContext";
import { useContext } from "react";
const MovieItem = () => {
  let { movieItems } = useContext(CinemaApiContext);

  console.log(movieItems);
  return (
    <div className="container d-flex flex-row flex-wrap align-items-center justfiy-content-between mt-4 ">
      <h2 className="shadow w-100 p-3 mt-5 text-secondary">Movies List</h2>
      <div className="row Gap-2 mt-4">
        {movieItems && movieItems.length > 0 ? (
          movieItems.map((movie) => (
            <div className="col-md-4 ">
              <div className="card mb-4 " key={movie.id}>
                <div className="card-body d-flex flex-column justify-content-center align-items-center shadow-sm">
                  <img
                    className="w-100 mb-2"
                    src={movie.poster}
                    alt={movie.title}
                    style={{
                      minHeight: 230,
                      minWidth: 230,
                      maxHeight: 230,
                      maxWidth: 230,
                      objectFit: "cover",
                      borderRadius: 3,
                    }}
                  />

                  <h3 className="shadow-sm p-2 w-100 text-center text-secondary fw-bold">
                    {movie.title}
                  </h3>

                  <span className="fw-bold badge bg-secondary me-1 p-3 mt-1 w-100">
                    Director: {movie.director}
                  </span>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No movies available.</p>
        )}
      </div>
    </div>
  );
};

export default MovieItem;
