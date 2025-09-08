import React, { useState } from "react";

function ImageConverter({ onImageConverted }) {
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) {
      alert("File is not Availiable");
      return;
    }

    if (file.size > 2000000) {
      alert("File is too large ");
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

function AddCourse() {
  const [courseData, setCourseData] = useState({
    Name: "",
    Description: "",
    ImgUrl: "",
    VideoUrl: "",
  });

  const handleInputChange = (e) => {
    setCourseData({ ...courseData, [e.target.name]: e.target.value });
  };

  const handleImageConverted = (base64Image) => {
    setCourseData({ ...courseData, ImgUrl: base64Image });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const existingCourse = JSON.parse(localStorage.getItem("course") || "[]");

    const urlRegex =
      /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/;

    if (existingCourse.some((u) => u.Name === courseData.Name)) {
      alert("This Course Name already exists!");
      return;
    }
    if (courseData.Name.length < 2) {
      alert("Enter a valid Course Name!");
      return;
    }
    if (!courseData.ImgUrl) {
      alert("Please upload an image!");
      return;
    }
    if (!urlRegex.test(courseData.VideoUrl)) {
      alert("Enter a valid Video URL!");
      return;
    }

    const newCourse = {
      Name: courseData.Name,
      Description: courseData.Description,
      ImgUrl: courseData.ImgUrl,
      VideoUrl: courseData.VideoUrl,
    };

    existingCourse.push(newCourse);
    localStorage.setItem("course", JSON.stringify(existingCourse));

    alert(`${courseData.Name} added successfully!`);

    setCourseData({
      Name: "",
      Description: "",
      ImgUrl: "",
      VideoUrl: "",
    });
  };

  return (
    <div>
      <h1 className="text-4xl font-bold drop-shadow-lg ">Course Management</h1>

      <div className="bg-white/10 backdrop-blur-xl rounded-2xl shadow-lg p-8 w-full max-w-md mt-10">
        <p className="text-xl font-bold mb-5">Add Course</p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label>Course Name</label>
            <input
              type="text"
              name="Name"
              placeholder="Enter Course Name"
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
              placeholder="Enter Course Description"
              value={courseData.Description}
              onChange={handleInputChange}
              className="w-full bg-white/10 border border-white/20 rounded-xl py-3 px-4 text-white"
              required
            />
          </div>

          <div>
            <label>Upload Course Image</label>
            <ImageConverter onImageConverted={handleImageConverted} />
          </div>

          <div>
            <label>Course Video URL</label>
            <input
              type="text"
              name="VideoUrl"
              placeholder="Enter Video URL"
              value={courseData.VideoUrl}
              onChange={handleInputChange}
              className="w-full bg-white/10 border border-white/20 rounded-xl py-3 px-4 text-white"
              required
            />
          </div>

          <button
            type="submit"
            className="bg-gradient-to-r from-green-400 to-cyan-600 hover:scale-105 px-5 py-2 rounded-full transition text-darkblue shadow-lg"
          >
            Add Course
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddCourse;
