import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import MainPage from "./components/MainPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/episode-list" element={<MainPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
