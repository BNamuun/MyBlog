import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ClientPart } from "./Client/ClientPart";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/client/*" element={<ClientPart />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
