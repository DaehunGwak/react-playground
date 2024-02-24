import {BrowserRouter, Route, Routes} from "react-router-dom";
import CharactersPage from "./page/CharactersPage";
import CharacterDetailPage from "./page/CharacterDetailPage";
import styles from "./App.module.css";

function App() {
  return (
    <div>
      <div className={styles.title}>
        <span>Marvelous</span>
      </div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CharactersPage/>}/>
          <Route path="/character/:id" element={<CharacterDetailPage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
