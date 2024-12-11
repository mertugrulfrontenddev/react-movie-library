export const Home = () => {
  return (
    <div className="card">
      <div className="card-body">
        <div class="d-flex justify-content-center flex-wrap">
          <img
            className="img-fluid w-100 mx-auto d-block"
            style={{
              maxHeight: "400px", // Resmin maksimum yüksekliği
              objectFit: "cover", // Yükseklik sınırına uyumlu kesme
            }} // d-block ve mx-auto ile ortalar
            src="/images/coming_soon.jpg"
            alt="Coming soon poster for the Movie Library"
          />

          <p className="lead w-100 mx-auto mt-3 bg-light p-2 rounded shadow-sm border border-secondary">
            Welcome! "Movie Library" is a platform where you can list, explore,
            and create your own collection of favorite movies and TV shows.
            Whether you're discovering the latest releases or getting lost in
            nostalgic classics, dive into the world of cinema and start
            exploring now! 🎬
          </p>
        </div>
      </div>
    </div>
  );
};
