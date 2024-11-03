import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import RegistrationPage from "../pages/RegistrationPage";
import ContactsPage from "../pages/ContactsPage";
import PrivateRoute from "../components/PrivateRoute";
import RestrictedRoute from "../components/RestrictedRoute";
import Layout from "../components/Layout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route
          path="register"
          element={<RestrictedRoute element={<RegistrationPage />} />}
        />
        <Route
          path="login"
          element={<RestrictedRoute element={<LoginPage />} />}
        />
        <Route
          path="contacts"
          element={<PrivateRoute element={<ContactsPage />} />}
        />
      </Route>
    </Routes>
  );
}

export default App;
