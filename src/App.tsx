import { Route, Routes } from "react-router-dom";
import Location from "./Pages/Location";
import Home from "./Pages/Home";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/location" element={<Location />} />
      </Routes>
    </div>
  );
}

export default App;
