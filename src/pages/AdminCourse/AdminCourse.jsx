import React from "react";
import { Plus, Lock, User, Shield } from "lucide-react";
import { Link, Outlet } from "react-router-dom";

function AdminCourse() {
  return (
    <div className="shadow-lg p-8 w-full  mt-10">
      <ul className="align-center text-center">
        <Link to="/admin/courses/addCourse">
          <li className="bg-white/10 backdrop-blur-xl rounded-2xl shadow-lg p-8 w-full  mt-10 w-full text-lg">
            <Plus className=" text-yellow/20 w-6 h-6" />
            <p className="text-glow"> Add Course </p>
          </li>
        </Link>

        <Link to="/admin/courses/removeCourse">
          <li className="bg-white/10 backdrop-blur-xl rounded-2xl shadow-lg p-8 w-full  mt-10 w-full text-lg">
            {" "}
            Remove Course
          </li>
        </Link>

        <Link to="/admin/courses/editCourse">
        <li className="bg-white/10 backdrop-blur-xl rounded-2xl shadow-lg p-8 w-full  mt-10 w-full text-lg">
          {" "}
           Edit Course
        </li>
        </Link>
      </ul>

      <div className="flex-1 p-10 text-yellow-200"></div>
    </div>
  );
}
export default AdminCourse;
