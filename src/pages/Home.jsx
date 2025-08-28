import React from "react";
import logo from "../assets/HomeLogo.png";
import bgImage from "../assets/HomePageBg.jpg";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <nav
        className="relative flex items-center justify-between  px-12 py-6 text-white bg-gradient-to-r from-darkblue via-green-900 to-cyan-800 sticky top-0 z-50
"
      >
        <div className="flex items-center space-x-2 ml-1">
          <img src={logo} alt="Logo" className="h-12 w-13 rounded-full" />
          <span className="text-xl font-bold  font-poppins">OpenLearn</span>
        </div>

        <div className="flex-1 flex justify-center text-yellow-100">
          <ul className="flex space-x-12  font-poppins text-lg drop-shadow-[0_0_15px_rgba(255,255,0,0.6)]">
            <li className="hover:text-green-400 cursor-pointer">
              <Link to="/Course">Courses</Link>
            </li>
            <li className="hover:text-green-400 cursor-pointer">
              <Link to="/Contact">Contact</Link>
            </li>
          </ul>
        </div>

        <div className="mr-12">
          <Link to="/Login">
            <button className=" w-40 bg-gradient-to-r from-green-300 to-cyan-800 hover:scale-105 px-5 py-2 rounded-full font-poppins transition text-darkblue shadow-[0_0_15px_rgba(255,255,0,0.7)] hover:shadow-[0_0_25px_rgba(255,255,0,1)] ">
              LOGIN
            </button>
          </Link>
        </div>
      </nav>

      <div
        className="h-screen w-full bg-cover relative text-yellow-100 animate-moveUpDown"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center top", 
        }}
      >
        <div className="absolute top-20 left-20 font-poppins drop-shadow-[0_0_15px_rgba(255,255,0,1)]">
          <h1 className="text-5xl font-bold px-6 py-4 rounded-lg ">
            Welcome to OpenLearn,
          </h1>
          <br />
          <h2 className="text-5xl  ml-10 font-bold  px-6 py-4 rounded-lg">
            join us for Free Now !
          </h2>
          <div className="flex">
            <Link to="/login" className="ml-60 mt-20">
              <button className="animate-bounce font-bold w-32 h-32 font-poppins text-darkblue bg-gradient-to-r from-green-800 to-cyan-100 hover:scale-105 px-5 py-2 rounded-full font-poppins transition  shadow-[0_0_15px_rgba(255,255,0,0.7)] hover:shadow-[0_0_25px_rgba(255,255,0,1)] hover:text-yellow-00">
                <p className="drop-shadow-[0_0_15px_rgba(255,255,0,0.6)] ">
                  Join Now
                </p>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
