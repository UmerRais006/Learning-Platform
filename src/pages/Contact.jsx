import { useState } from "react";
import { Mail, User, MessageSquare } from "lucide-react";

function Contact() {
  const [contactData, setContactData] = useState({
    fullName: "",
    email: "",
    query: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const correctEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!correctEmail.test(contactData.email)) {
      alert("Please enter a valid email address!");
      return;
    }


    const gmailURL = `https://mail.google.com/mail/?view=cm&fs=1&to=umerrais006@gmail.com&su=${encodeURIComponent(
      "New Contact Query from Website"
    )}&body=${encodeURIComponent(
      `Name: ${contactData.fullName}\nEmail: ${contactData.email}\nMessage: ${contactData.query}`
    )}`;

    window.open(gmailURL, "_blank"); // opens in new tab
  };

  const handleInputChange = (e) => {
    setContactData({ ...contactData, [e.target.name]: e.target.value });
  };

  return (
    <div className="bg-emerald-100 w-full h-screen">
      <div>
        <h1 className="text-black w-max relative top-40 left-[15%] text-8xl">
          Open
        </h1>
      </div>
      <div>
        <h1 className="text-black w-max relative top-40 left-[19%] text-8xl">
          Learn
        </h1>
      </div>

      <div className="border-4 rounded-3xl border-black w-[40%] h-fit top-10 absolute left-[50%] p-7">
        <form onSubmit={handleSubmit}>
          <div className=" flex justify-center m-4 text-4xl font-bold">
            <h1> Contact us !</h1>
          </div>

          <div className="relative p-3">
            <p className="mb-1">Enter your name:</p>
            <User className="absolute left-4 top-[50%] text-black/60 w-6 h-6" />
            <input
              type="text"
              name="fullName"
              value={contactData.fullName}
              onChange={handleInputChange}
              placeholder="Full Name"
              className="w-full bg-white/10 border-2 border-black rounded-xl py-3 px-10 
                         text-black placeholder-black/60 hover:scale-105"
              required
            />
          </div>

          <div className="relative p-3">
            <p className="mb-1">Enter your Email:</p>
            <Mail className="absolute left-4 top-[50%] text-black/60 w-6 h-6" />
            <input
              type="email"
              name="email"
              value={contactData.email}
              onChange={handleInputChange}
              placeholder="Email"
              className="w-full bg-white/10 border-2 border-black rounded-xl py-3 px-10 
                         text-black placeholder-black/60 hover:scale-105"
              required
            />
          </div>

          <div className="relative  p-3">
            <p className="mb-1">Leave your message here!</p>
            <MessageSquare className="absolute left-4 top-14 text-black/60 w-6 h-6" />
            <textarea
              name="query"
              value={contactData.query}
              onChange={handleInputChange}
              placeholder="Your Message"
              className="h-36 w-full bg-white/10 border-2 border-black rounded-xl py-3 px-10 
                         text-black placeholder-black/60 hover:scale-105"
              required
            />
          </div>

          <div className=" p-3">
            <button
              type="submit"
              className="w-full bg-black/90 text-white rounded-xl py-3 hover:bg-black/80 transition"
            >
              <p className="font-bold text-xl"> Submit</p>
            </button>
          </div>
        </form>

        <div className=" p-3">
          <p className="font-bold text-xl">
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=umerrais006@gmail.com&su=Hello&body=This%20is%20a%20test"
              target="_blank"
              rel="noopener noreferrer"
            >
              Send us an Email via Gmail
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
