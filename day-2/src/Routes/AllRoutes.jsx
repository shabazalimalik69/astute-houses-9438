import { Routes, Route } from "react-router-dom";
import Espanol from "./Espanol";
import Support from "./Support";
import Trips from "./Trips";
import Home from "./Home";
import Login from "./Login";
import ListProperty from "./ListProperty";

export default function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/espanol" element={<Espanol />} />
      <Route path="/support" element={<Support />} />
      <Route path="/trips" element={<Trips />} />
      <Route path="/property" element={<ListProperty />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}
