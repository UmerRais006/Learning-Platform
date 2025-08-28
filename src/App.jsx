import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Course from "./pages/Course";
import Contact from "./pages/Contact";
import Layout from "./pages/Layout";
import UserPage from "./pages/UserPage/UserPage";
import AdminCourse from "./pages/AdminCourse/AdminCourse";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/course" element={<Course />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="/admin" element={<Layout />}>
          <Route index element={<div>Welcome to Admin Dashboard</div>} />
          <Route path="users" element={<UserPage />} />
          <Route path="courses" element={<AdminCourse />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
