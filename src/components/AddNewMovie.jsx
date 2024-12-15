import { CinemaApiContext } from "../context/CinemaContext";
import { useContext, useEffect, useState } from "react";

const AddNewMovie = () => {
  let { movieItems, setMovieItems } = useContext(CinemaApiContext);

  let [values, setValues] = useState({
    title: "",
    genre: "",
    director: "",
    year: "",
    poster: "",
  });

  let [isSuccess, setIsSuccess] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();

    setMovieItems((prevItems) => [...prevItems, values]);

    setIsSuccess(true);
  }

  let handleChange = (event) => {
    let { name, value } = event.target;

    setValues({ ...values, [name]: value });
  };

  let handleImageChange = (event) => {
    let file = event.target.files[0];

    if (file) {
      const imageUrl = URL.createObjectURL(file);

      setValues({ ...values, poster: imageUrl });
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100">
      <div className="card mt-5" style={{ maxWidth: "600px", width: "100%" }}>
        <div className="card-body">
          <form
            action=""
            className="d-flex flex-column mt-3 p-4 gap-3 align-items-center"
            onSubmit={(event) => handleSubmit(event)}
          >
            <h3 className="text-center text-secondary">Movie Add Page</h3>

            {isSuccess && <p>Film Başarıyla Eklendi!!!</p>}
            <div className="w-100">
              <label
                htmlFor="title"
                className="form-label text-secondary fw-bold"
              >
                Title:
              </label>
              <input
                type="text"
                id="title"
                name="title"
                value={values.title}
                className="form-control"
                placeholder="Enter movie title"
                onChange={handleChange}
              />
            </div>
            <div className="w-100">
              <label
                htmlFor="genre"
                className="form-label text-secondary fw-bold"
              >
                Genre:
              </label>
              <input
                type="text"
                id="genre"
                name="genre"
                value={values.genre}
                className="form-control"
                placeholder="Enter movie genre"
                onChange={handleChange}
              />
            </div>
            <div className="w-100">
              <label
                htmlFor="director"
                className="form-label text-secondary fw-bold"
              >
                Director:
              </label>
              <input
                type="text"
                id="director"
                name="director"
                value={values.director}
                className="form-control"
                placeholder="Enter director's name"
                onChange={handleChange}
              />
            </div>
            <div className="w-100">
              <label
                htmlFor="year"
                className="form-label text-secondary fw-bold"
              >
                Year:
              </label>
              <input
                type="number"
                id="year"
                name="year"
                value={values.year}
                className="form-control"
                placeholder="Enter release year"
                onChange={handleChange}
              />
            </div>

            <div className="w-100">
              <label
                htmlFor="poster"
                className="form-label text-secondary fw-bold"
              >
                Movie-Poster
              </label>
              <input
                type="file"
                id="poster"
                name="poster"
                className="form-control"
                placeholder="Enter release year"
                onChange={handleImageChange}
              />
            </div>
            <button type="submit" className="btn btn-primary w-100">
              Add Movie
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddNewMovie;
