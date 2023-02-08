import { Route, Routes } from "react-router-dom";
import { Header } from "./Header";

export function ClientPart() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Header />} />
      </Routes>
    </>
  );
}
