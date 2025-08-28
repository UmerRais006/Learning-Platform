import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Mail, Lock, User, Shield } from "lucide-react";
import bgImage from "../assets/HomePageBg.jpg"; 

const LoginSignupPage = () => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "",
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];

    if (!isLogin) {
      const userExists = existingUsers.some((u) => u.email === formData.email);
      if (userExists) {
        alert("This User Already Exists!");
        return;
      }

      const correctEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!correctEmail.test(formData.email)) {
        alert("Please enter a valid email address!");
        return;
      }

      if (formData.password.length < 8) {
        alert("Password must be at least 8 characters long!");
        return;
      }

      // confirm password check
      if (formData.password !== formData.confirmPassword) {
        alert("Passwords do not match!");
        return;
      }
      if (formData.role === "admin") {
        const adminExists = existingUsers.some((u) => u.role === "admin");
        if (adminExists) {
          alert("An Admin already exists. Only one admin allowed!");
          return;
        }
      }

      const newUser = {
        fullName: formData.fullName,
        email: formData.email,
        password: formData.password,
        role: formData.role,
      };

      existingUsers.push(newUser);
      localStorage.setItem("users", JSON.stringify(existingUsers));

      alert(`${formData.role} signup successful!`);
    } else {

      const user = existingUsers.find(
        (u) => u.email === formData.email && u.password === formData.password
      );

      if (user) {
        if (user.role == "student") {
          alert(`Login successful as Student`);
          navigate("/Home");
        } else {
          alert(`Login successful as Admin`);
         navigate("/admin")
        }
      } else {
        alert("Invalid email or password!");
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4"
       style={{
    backgroundImage: `url(${bgImage})`,
   
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  }}>
      
      <div className="bg-white/10 backdrop-blur-xl rounded-2xl shadow-lg p-8 w-full max-w-md bg-gradient-to-r from-darkblue via-green-900 to-cyan-800">
        <h2 className="text-2xl font-bold text-white mb-2">
          {isLogin ? "Login" : "Sign Up"}
        </h2>
        <p className="text-white/80 mb-6">
          {isLogin ? "Sign in to your account" : "Create your account"}
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          {!isLogin && (
            <div className="relative">
              <User className="absolute left-3 top-3.5 text-white/50 w-5 h-5" />
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                placeholder="Full Name"
                className="w-full bg-white/10 border border-white/20 rounded-xl py-3 px-10 
                           text-white placeholder-white/60 focus:outline-none focus:ring-2 
                           focus:ring-white/30 focus:scale-105"
                required
              />
            </div>
          )}

          <div className="relative">
            <Mail className="absolute left-3 top-3.5 text-white/50 w-5 h-5" />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Email"
              autoComplete="off"
              className="w-full bg-white/10 border border-white/20 rounded-xl py-3 px-10 
                         text-white placeholder-white/60 focus:outline-none focus:ring-2 
                         focus:ring-white/30 focus:scale-105 autofill:bg-transparent"
              required
            />
          </div>

          <div className="relative">
            <Lock className="absolute left-3 top-3.5 text-white/50 w-5 h-5" />
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              placeholder="Password"
              className="w-full bg-white/10 border border-white/20 rounded-xl py-3 px-10 
                         text-white placeholder-white/60 focus:outline-none focus:ring-2 
                         focus:ring-white/30 focus:scale-105"
              required
            />
          </div>

          {!isLogin && (
            <>
              <div className="relative">
                <Lock className="absolute left-3 top-3.5 text-white/50 w-5 h-5" />
                <input
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  placeholder="Confirm Password"
                  className="w-full bg-white/10 border border-white/20 rounded-xl py-3 px-10 
                             text-white placeholder-white/60 focus:outline-none focus:ring-2 
                             focus:ring-white/30 focus:scale-105"
                  required
                />
              </div>

              <div className="relative">
                <Shield className="absolute left-3 top-3.5 text-white/50 w-5 h-5" />
                <select
                  name="role"
                  value={formData.role}
                  onChange={handleInputChange}
                  className="w-full bg-white/10 border border-white/20 rounded-xl py-3 px-10 
                             text-white focus:outline-none focus:ring-2 
                             focus:ring-white/30 focus:scale-105"
                  required
                >
                  <option value="" disabled>
                    Select Role
                  </option>
                  <option value="student" className="text-black">
                    Student
                  </option>
                  <option value="admin" className="text-black">
                    Admin
                  </option>
                </select>
              </div>
            </>
          )}

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-green-300 to-cyan-1000 hover:scale-105 px-5 py-2 rounded-full font-poppins transition text-darkblue shadow-[0_0_15px_rgba(255,255,0,0.7)] hover:shadow-[0_0_25px_rgba(255,255,0,1)]"
          >
            {isLogin ? "Login" : "Sign Up"}
          </button>
        </form>

        <p className="text-white/80 text-center mt-6">
          {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="text-yellow-100 hover:underline"
          >
            {isLogin ? "Sign Up" : "Login"}
          </button>
        </p>
      </div>
    </div>
  );
};

export default LoginSignupPage;
