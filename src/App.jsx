import { MoviesProvider } from "./contexts/BooflixContext";
import Header from "./layout/Header";
import Main from "./layout/Main";
function App() {
  return (
    <MoviesProvider>
      <Header></Header>
      <Main></Main>
    </MoviesProvider>
  );
}

export default App;
