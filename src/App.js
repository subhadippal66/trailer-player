import "./App.css";
import Row from "./row";
import request from "./request";
import Banner from "./Banner";
import Nav from "./Nav";

// const movieData = null;
// callAPI() {
//   fetch("http://localhost:9000/movieDataRoute")
//       .then(res => res.text())
//       .then(res => movieData = res);
// }

function App() {
  return (
    <div className="app">
      <Nav />
      <Banner />
      <Row title="Netflix Original" fetchUrl={request.fetchNetflixOriginal} />
      <Row title="Top Rated" fetchUrl={request.fetchTopRated} />
      <Row title="Trending Now" fetchUrl={request.fetchTrending} />
      <Row title="Action Movies" fetchUrl={request.fetchActionMovies} />
      <Row title="Comdey Movies" fetchUrl={request.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={request.fetchHorrorMovies} />
      <Row title="Romantic Movies" fetchUrl={request.fetchRomanticMovies} />
      <Row
        title="Documentary Movies"
        fetchUrl={request.fetchDocumentryMovies}
      />
      <p
        style={{
          padding: "15px",
          textAlign: "center",
        }}
      >
        © 2020 Trailer Player. All rights reserved. Developer - Subhadip Pal
        *Use shift+scroll to scroll horizontally
      </p>
    </div>
  );
}

export default App;
