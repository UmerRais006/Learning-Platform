import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Course from "./pages/Course";
import Contact from "./pages/Contact";
import Layout from "./pages/Layout";
import UserPage from "./pages/AdminCourse/UserPage";
import AdminCourse from "./pages/AdminCourse/AdminCourse";
import AddCourse from "./pages/AdminCourse/CourseManagement/AddCourse";
// import AddCourse from "./pages/AdminCourse/CourseManagement/AddCourse";
import EditCourse from "./pages/AdminCourse/CourseManagement/EditCourse";
import RemoveCourse from "./pages/AdminCourse/CourseManagement/RemoveCourse";
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
          <Route path="/admin/courses" element={<AdminCourse />} />

          <Route path="/admin/courses/addCourse" element={<AddCourse />} />
          <Route
            path="/admin/courses/removeCourse"
            element={<RemoveCourse />}
          />
          <Route
            path="/admin/courses/editCourse"
            element={<EditCourse />}
          />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
