import React, { useEffect, useState } from "react";

function RemoveCourse() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const courseData = JSON.parse(localStorage.getItem("course")) || [];
    if (courseData.length > 0) {
      setData(courseData);
    }
  }, []);

  const handleRemove = (e) => {
    e.preventDefault();
    const updatedCourse = data.filter((item) => item.Name !== search);
    setData(updatedCourse);
    localStorage.setItem("course", JSON.stringify(updatedCourse));
    setSearch("");
  };

  return (
    <div className="border-2 border-double border-yellow-100 w-full flex flex-row">
      <div className="w-1/3 h-screen">
        <p className="text-2xl font-bold text-center py-6">Current Courses</p>
        <div className="mt-10">
          {data.length > 0 ? (
            <ul>
              {data.map((item, index) => (
                <li
                  key={index}
                  className="m-5 w-max bg-gradient-to-r from-green-300 to-cyan-800 hover:scale-105 px-5 py-2 rounded-full font-poppins transition text-darkblue shadow-[0_0_15px_rgba(255,255,0,0.5)] hover:shadow-[0_0_25px_rgba(255,255,0,1)]"
                >
                  {item.Name}
                </li>
              ))}
            </ul>
          ) : (
            <p className="ml-10">No course available to remove!</p>
          )}
        </div>
      </div>

      <div className="border-2 border-solid border-yellow-100 w-full h-screen">
        <p className="text-2xl font-bold text-center py-6 border-b">
          Remove Course
        </p>
        <form className="space-y-4 p-4" onSubmit={handleRemove}>
          <div>
            <label>Course Name</label>
            <input
              type="text"
              placeholder="Enter course name to remove"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-white/10 border border-white/20 rounded-xl py-3 px-4 text-white"
              required
            />
          </div>
          <button
            type="submit"
            className="w-max bg-gradient-to-r from-green-300 to-cyan-800 hover:scale-105 px-5 py-2 rounded-full font-poppins transition text-darkblue shadow-[0_0_15px_rgba(255,255,0,0.5)] hover:shadow-[0_0_25px_rgba(255,255,0,1)]"
          >
            Remove Course
          </button>
        </form>
      </div>
    </div>
  );
}

export default RemoveCourse;
