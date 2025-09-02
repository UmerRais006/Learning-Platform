import React from "react";
import { BookOpenText, Users, LayoutDashboard } from "lucide-react";
import { Link } from "react-router-dom";
import bgImage from "../assets/HomePageBg.jpg";

function AdminSide() {
  return (
    
    <div

      className="flex animate-moveUpDown"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center top",
      }}
    >
      <nav className=" w-64 h-screen bg-gradient-to-b from-darkblue via-green-900 to-cyan-800 text-white font-poppins shadow-2xl text-yellow-200">
        <h2 className="text-2xl font-bold text-center py-6 border-b ">
          Admin Panel
        </h2>
        <ul className="flex flex-col mt-6 space-y-3">
          <li className="flex items-center p-4 cursor-pointer hover:bg-green-700 hover:pl-6 transition-all rounded-r-full">
            <LayoutDashboard className="mr-3" />
            <span>Dashboard</span>
          </li>

          <Link to="/UserPage">
            <li className="flex items-center p-4 cursor-pointer hover:bg-green-700 hover:pl-6 transition-all rounded-r-full">
              <Users className="mr-3" />
              <span>Users</span>
            </li>
          </Link>

          <Link to="/AdminCourse">
            <li className="flex items-center p-4 cursor-pointer hover:bg-green-700 hover:pl-6 transition-all rounded-r-full">
              <BookOpenText className="mr-3" />
              <span>Courses</span>
            </li>
          </Link>

        </ul>
      </nav>

      <div className="flex-1 p-10 text-yellow-200">
       
      </div>
    </div>
  );
}

export default AdminSide;
