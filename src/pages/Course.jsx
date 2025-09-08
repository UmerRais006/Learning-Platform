import React from "react";
import { useState, useEffect } from "react";
import bgImage from "../assets/HomePageBg.jpg";
function Course() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const courseData = JSON.parse(localStorage.getItem("course")) || [];
    if (courseData.length > 0) {
      setData(courseData);
    }
  }, []);
  return (
    <div
      className="flex min-h-screen animate-moveUpDown"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center top",
      }}
    >
      <ul className="grid grid-cols-4 gap-20 p-6">
        {data.map((item, index) => (
          <li
            key={index}
            className="bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105"
          >
            <h2 className="text-xl font-bold text-yellow-200 mb-3">
              {item.Name}
            </h2>
            <p className="text-sm text-gray-200 ">
              {item.Description}
            </p>
            <div className="mt-4 flex justify-end">
              <button className="px-4 py-2 bg-gradient-to-r from-green-400 to-cyan-600 rounded-full text-white font-semibold shadow-md hover:shadow-xl hover:scale-105 transition">
                Learn
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Course;
