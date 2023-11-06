import "./App.css";
import CharactersList from "./pages/CharactersList";
import { Route, Routes } from "react-router-dom";
import Character from "./pages/Character";
import Search from "./pages/Search";

function App() {
  return (
    <div className="App">
      <Search />
      <Routes>
        <Route path="/" element={<CharactersList />} />
        <Route path="/search" element={<Search />} />
        <Route path="/:id" element={<Character />} />
      </Routes>
    </div>
  );
}

export default App;
