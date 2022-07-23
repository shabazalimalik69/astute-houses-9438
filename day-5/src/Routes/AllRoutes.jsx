import { Routes, Route } from "react-router-dom";
import PrivateRoute from "../Components/PrivateRoute";
import Espanol from "./Espanol";
import Support from "./Support";
import Trips from "./Trips";
import Home from "./Home";
import Login from "./Login";
import UserPage from "./UserPage";
import ListProperty from "./ListProperty";

export default function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/support" element={<Support />} />
      <Route path="/trips" element={<Trips />} />
      <Route path="/property" element={<ListProperty />} />
      <Route path="/login" element={<Login />} />

      <Route
        path="/espanol"
        element={
          <PrivateRoute>
            <Espanol />
          </PrivateRoute>
        }
      />
      <Route
        path="/espanol/:espanol_id"
        element={
          <PrivateRoute>
            <UserPage />
          </PrivateRoute>
        }
      />
    </Routes>
  );
}
