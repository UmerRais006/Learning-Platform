import React, { useState, useEffect } from "react";

function ImageConverter({ onImageConverted }) {
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) {
      alert("File is not Available");
      return;
    }

    if (file.size > 2000000) {
      alert("File is too large");
      return;
    }

    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = () => {
      onImageConverted(reader.result);
    };

    reader.onerror = (error) => {
      console.log("Error: ", error);
    };
  };

  return (
    <div>
      <input
        type="file"
        accept="image/*"
        id="upload-img"
        className="bg-gradient-to-r from-green-400 to-cyan-600 hover:scale-105 px-5 py-2 rounded-full transition text-darkblue shadow-lg file:bg-yellow-100 file:border-none"
        onChange={handleFileChange}
      />
    </div>
  );
}

function EditCourse() {
  const [courseData, setCourseData] = useState({
    Name: "",
    Description: "",
    ImgUrl: "",
    VideoUrl: "",
  });


  const [courseToEdit, setCourseToEdit] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    const courseData = JSON.parse(localStorage.getItem("course")) || [];
    if (courseData.length > 0) {
      setData(courseData);
    }
  }, []);

  const handleInputChange = (e) => {
    setCourseData({ ...courseData, [e.target.name]: e.target.value });
  };

  const handleImageConverted = (base64Image) => {
    setCourseData({ ...courseData, ImgUrl: base64Image });
  };

  const loadCourseForEdit = () => {
    const existingCourse = JSON.parse(localStorage.getItem("course") || "[]");
    const foundCourse = existingCourse.find((c) => c.Name === courseToEdit);
    if (foundCourse) {
      setCourseData(foundCourse);
    } else {
      alert("Course not found!");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const existingCourse = JSON.parse(localStorage.getItem("course") || "[]");

    const urlRegex =
      /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/;

    if (courseData.Name.length < 2) {
      alert("Enter a valid Course Name!");
      return;
    }
    if ( !courseData.ImgUrl ) {
      alert("Please upload an image!");
      return;
    }
    if ( !urlRegex.test(courseData.VideoUrl) ) {
      alert("Enter a valid Video URL!");
      return;
    }

    const updatedCourses = existingCourse.map((c) =>
      c.Name === courseToEdit ? courseData : c
    );

    localStorage.setItem("course", JSON.stringify(updatedCourses));
    setData(updatedCourses);

    alert(`${courseData.Name} updated successfully!`);

    setCourseToEdit("");
    setCourseData({ Name: "", Description: "", ImgUrl: "", VideoUrl: "" });
  };

  return (
    <div className="w-full flex flex-row h-screen border">
      <div className="w-1/2 border-2 border-solid border-yellow-100 p-6">
        <h1 className="text-4xl font-bold drop-shadow-lg">Edit Course</h1>

        <div className="bg-white/10 backdrop-blur-xl rounded-2xl shadow-lg p-8 mt-10">
          <p className="text-xl font-bold mb-5">Find And Edit Course</p>

          <div className="mb-5">
            <label>Enter course name to edit</label>
            <input
              type="text"
              placeholder="Enter course name"
              value={courseToEdit}
              onChange={(e) => setCourseToEdit(e.target.value)}
              className="w-full bg-white/10 border border-white/20 rounded-xl py-3 px-4 text-white"
            />
            <button
              type="button"
              onClick={loadCourseForEdit}
              className="mt-3 bg-gradient-to-r from-yellow-300 to-orange-600 px-5 py-2 rounded-full text-darkblue"
            >
              Load Course
            </button>
          </div>

          {courseData.Name && (
            <form onSubmit={handleSubmit} className="space-y-1 h-full w-full">
              <div>
                <label>Course Name</label>
                <input
                  type="text"
                  name="Name"
                  placeholder="New course name"
                  value={courseData.Name}
                  onChange={handleInputChange}
                  className="w-full bg-white/10 border border-white/20 rounded-xl py-3 px-4 text-white"
                  required
                />
              </div>

              <div>
                <label>Course Description</label>
                <input
                  type="text"
                  name="Description"
                  placeholder="New course description"
                  value={courseData.Description}
                  onChange={handleInputChange}
                  className="w-full bg-white/10 border border-white/20 rounded-xl py-3 px-4 text-white"
                  required
                />
              </div>

              <div>
                <label>Upload Course Image</label>
                <ImageConverter onImageConverted={handleImageConverted} />
                {courseData.ImgUrl && (
                  <img
                    src={courseData.ImgUrl}
                    alt="preview"
                    className="mt-3 w-32 h-20 rounded-lg object-cover"
                  />
                )}
              </div>

              <div>
                <label>Course Video URL</label>
                <input
                  type="text"
                  name="VideoUrl"
                  placeholder="New video url"
                  value={courseData.VideoUrl}
                  onChange={handleInputChange}
                  className="w-full bg-white/10 border border-white/20 rounded-xl py-3 px-4 text-white"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-max bg-gradient-to-r from-green-300 to-cyan-800 hover:scale-105 px-5 py-2 rounded-full transition text-darkblue shadow-lg"
              >
                Update Course
              </button>
            </form>
          )}
        </div>
      </div>

      <div className="w-1/2 border-2 border-solid border-yellow-100">
        <p className="text-2xl font-bold text-center py-6">Current Courses</p>
        <div className="mt-10">
          {data.length > 0 ? (
            <ul>
              {data.map((item, index) => (
                <li
                  key={index}
                  className="m-5 w-max bg-gradient-to-r from-green-300 to-cyan-800 hover:scale-105 px-5 py-2 rounded-full transition text-darkblue shadow-lg"
                >
                  {item.Name}
                </li>
              ))}
            </ul>
          ) : (
            <p className="ml-10">No course available!</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default EditCourse;
