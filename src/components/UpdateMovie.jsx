import { CinemaApiContext } from "../context/CinemaContext";
import { useContext, useState } from "react";

const UpdateMovie = () => {
  const [hoveredId, setHoveredId] = useState(null); // Başlangıçta null
  const { movieItems, setMovieItems } = useContext(CinemaApiContext);
  const [isEditing, setIsEditing] = useState(false);
  const [editingMovieId, setEditingMovieId] = useState(null);
  const [editedFields, setEditedFields] = useState({});

  function toggleUpdateBtn(movieId) {
    setHoveredId(movieId);
  }

  function handleDivVis() {
    setHoveredId(null);
  }

  function handleSave() {
    setMovieItems((prevMovies) =>
      prevMovies.map((movie) =>
        movie.id === editingMovieId ? { ...movie, ...editedFields } : movie
      )
    );
    setEditingMovieId(null); // Düzenleme modundan çık
    setEditedFields({}); // Formu sıfırla
    setIsEditing(false);
  }

  function handleEdit(movie) {
    setEditingMovieId(movie.id);
    setEditedFields({
      director: movie.director,
      title: movie.title,
      year: movie.year,
      genre: movie.genre,
    });
    setIsEditing(true);
  }

  function handleInputChange(field, value) {
    setEditedFields((prev) => ({ ...prev, [field]: value }));
  }

  function handleImgUpload(event) {
    let file = event.target.files[0];

    if (file) {
      const imgUrl = URL.createObjectURL(file);

      setEditedFields({ ...editedFields, poster: imgUrl });
    }
  }

  return (
    <div className="card w-7 mx-auto" style={{ marginTop: "90px" }}>
      <div className="card-body">
        <div className="card-header">
          <h2 className="text-secondary">Update Movie Page</h2>
        </div>
        {/* Başlıklar */}
        <div className="row bg-primary text-white fw-bold text-center d-none d-md-flex">
          <div className="col-md-2 ">Poster</div>
          <div className="col-md-1">Num</div>
          <div className="col-md-1">Title</div>
          <div className="col-md-2">Genre</div>
          <div className="col-md-2">Director</div>
          <div className="col-md-1">Year</div>

          <div className="col-md-2 ">Update</div>
        </div>

        {/* Film Listesi */}
        {movieItems.map((movie, index) => (
          <div
            className="row text-secondary  text-center mx-auto align-items-center  py-2 border-bottom "
            key={movie.id}
          >
            <div className="col-12 col-md-2">
              {editingMovieId === movie.id ? (
                <input
                  type="file"
                  className="form-control"
                  onChange={(event) => handleImgUpload(event)}
                />
              ) : (
                <img
                  src={movie.poster}
                  className="img-thumbnail col-4 col-md-6"
                />
              )}
            </div>
            {/* Num */}
            <div className=" col-6 d-md-none fw-bold">Movie İndex</div>
            <div className="col-6 col-md-1 mb-1">{index + 1}</div>

            {/* Title */}
            <div className=" col-6 d-md-none fw-bold">Movie Name</div>
            <div className="col-6 col-md-1 mb-1 ">
              {editingMovieId === movie.id ? (
                <input
                  className="form-control"
                  type="text"
                  value={editedFields.title || ""}
                  onChange={(e) => handleInputChange("title", e.target.value)}
                />
              ) : (
                movie.title
              )}
            </div>

            {/* Genre */}
            <div className=" col-6 d-md-none fw-bold">Movie Genre</div>
            <div className="col-6 col-md-2 mb-1">
              {editingMovieId === movie.id ? (
                <select
                  className="form-control"
                  value={editedFields.genre || ""}
                  onChange={(e) => handleInputChange("genre", e.target.value)}
                >
                  <option value="">Select Movie Type</option>
                  <option value="Action">Action</option>
                  <option value="Drama">Drama</option>
                  <option value="Comedi">Comedi</option>
                  <option value="War">War</option>
                </select>
              ) : (
                movie.genre
              )}
            </div>

            {/* Director */}
            <div className="col-6 d-md-none fw-bold">Movie Director</div>
            <div className="col-6 col-md-2 mb-1">
              {editingMovieId === movie.id ? (
                <input
                  className="form-control"
                  type="text"
                  value={editedFields.director || ""}
                  onChange={(e) =>
                    handleInputChange("director", e.target.value)
                  }
                />
              ) : (
                movie.director
              )}
            </div>
            <div className="col-6 d-md-none fw-bold">Year</div>
            {/* Year */}
            <div className="col-6 col-md-1 mb-1">
              {editingMovieId === movie.id ? (
                <input
                  className="form-control"
                  type="text"
                  value={editedFields.year || ""}
                  onChange={(e) => handleInputChange("year", e.target.value)}
                />
              ) : (
                movie.year
              )}
            </div>

            {/* Update Butonu */}
            <div className="col-12 col-md-2">
              <div
                style={{
                  height: "30px",
                  width: "110px",
                  padding: "2px",
                  margin: "8px",
                  transform:
                    hoveredId === movie.id
                      ? "translateY(0)"
                      : "translateY(-3px)",
                  transition: "all 500ms",
                  display: "block",
                  marginLeft: "auto",
                }}
                onMouseEnter={() => toggleUpdateBtn(movie.id)}
                onMouseLeave={() => handleDivVis()}
              >
                {editingMovieId !== movie.id ? (
                  <button
                    className="btn btn-primary btn-sm "
                    onClick={() => handleEdit(movie)}
                  >
                    Update
                  </button>
                ) : (
                  <button
                    className="btn btn-success btn-sm"
                    onClick={handleSave}
                  >
                    Save
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpdateMovie;
