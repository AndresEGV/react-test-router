import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import Contacto from "./views/Contacto";
import NotFound from "./views/NotFound";
import Naves from "./views/Naves";

function App() {
  return (
    <div className="mx-auto">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/naves" element={<Naves />} />/
          <Route path="/contacto" element={<Contacto />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
