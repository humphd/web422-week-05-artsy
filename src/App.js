import { useState, useEffect } from "react";
import { Navbar, Jumbotron, Container } from "react-bootstrap";

import { search } from "./api";
import Search from "./Search";
import SearchResults from "./SearchResults";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  const [results, setResults] = useState(null);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Clear the results if the user gets rid of the search query
    if (!(query || query.length)) {
      setResults(null);
      return;
    }

    // Don't bother searching for anything less than 3 characters
    if (query.length < 3) {
      return;
    }

    // Otherwise, start a search
    setLoading(true);
    search(query, "id", "title", "image_id", "thumbnail")
      .then((searchResults) => {
        if (searchResults && searchResults.data) {
          setResults(searchResults.data);
        }
      })
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, [query]);

  return (
    <div className="App">
      <header>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand>Atrsy</Navbar.Brand>
        </Navbar>
        <Jumbotron fluid className="painting-background">
          <Container className="text-center">
            <h1>Find Art You Love</h1>
            <Search query={query} onChange={(e) => setQuery(e.target.value)} />
          </Container>
        </Jumbotron>
      </header>
      <main>
        <Container fluid>
          {error ? (
            <p>Unable to retrieve results.</p>
          ) : (
            <SearchResults results={results} loading={loading} />
          )}
        </Container>
      </main>
    </div>
  );
}

export default App;
