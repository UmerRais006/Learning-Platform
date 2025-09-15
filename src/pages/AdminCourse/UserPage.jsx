import React from "react";
import { useState,useEffect } from "react";


function UserPage() {


  const [formData, setFormData] = useState({
     fullName: "",
     email: "",
     password: "",
     confirmPassword: "",
     role: "",
   });
 

  return (


    <div>
      <h5
        className="text-4xl drop-shadow-[0_0_15px_rgba(255,255,0,0.6)] font-bold
        ">
        Administrator Management
      </h5>

      <br />
      <ul className="space-y-20 w-full ">
        <li className="border-2 border-yellow-100 border-rounded p-10 "  > Total Admins:

       <div className="">
          {formData.length > 0 ? (
            <ul>
              {formData.map((item, index) => (
                <li
                  key={index} 
                  className=" flex m-5 w-max bg-gradient-to-r from-green-300 to-cyan-800 hover:scale-105 px-5 py-2 rounded-full transition text-darkblue shadow-lg"
                >
                  {item.fullName}
                </li>
              ))}
            </ul>
          ) : (
            <p className="ml-10">No Admin availiable!</p>
          )}
        </div>
        </li>
        
        
      </ul>
    </div>
  );
}
export default UserPage;
