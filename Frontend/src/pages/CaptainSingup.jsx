import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const CaptainLogin = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [userData, setUserData] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    setUserData([
      ...userData,
      {
        fullname: { firstname: firstname, lastname: lastname },
        email,
        password,
      },
    ]);
    setEmail("");
    setPassword("");
    setFirstname("");
    setLastname("");
    console.log(userData);
    // console.log("Hello", email);
  };
  return (
    <div className="p-7 h-screen flex flex-col justify-between">
      <div>
        <img
          className="w-8 mb-5 inline-block"
          src="https://static.vecteezy.com/system/resources/previews/027/127/501/non_2x/uber-logo-uber-icon-transparent-free-png.png"
          alt=""
        />
        <img
          className="w-16 mb-5 inline-block"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Uber_logo_2018.svg/2560px-Uber_logo_2018.svg.png"
        />
        <form onSubmit={submitHandler}>
          <h3 className="text-lg font-medium mb-2">What's Your Name</h3>
          <div className="flex gap-4">
            <input
              required
              value={firstname}
              onChange={(e) => setFirstname(e.target.value)}
              className="bg-[#eeeeee] w-1/2 mb-2 rounded px-4 py-2 border text-lg placeholder:text-base"
              type="Name"
              placeholder="First Name"
            />
            <input
              required
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
              className="bg-[#eeeeee] mb-2 w-1/2 rounded px-4 py-2 border text-lg placeholder:text-base"
              type="Name"
              placeholder="Last Name"
            />
          </div>
          <h3 className="text-lg mb-2 font-medium">What's Your Email</h3>
          <input
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-[#eeeeee] mb-5 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
            type="email"
            placeholder="email@example.com"
          />
          <h3 className="text-lg mb-2 font-medium">Enter Password</h3>
          <input
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="bg-[#eeeeee] mb-8 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
            type="password"
            placeholder="password"
          />
          <button className="bg-[#111] text-white font-semibold mb-3 rounded px-4 py-2 w-full text-lg placeholder:text-base">
            Login
          </button>
        </form>
        <p className="text-center">
          Already have an Account?
          <Link to="/captain-login" className="text-blue-600">
            Login Here{" "}
          </Link>
        </p>
      </div>

      <div>
        <p className="text-xs leading-tight">
          This site is protected by reCAPTCHA and the{" "}
          <span className="underline text-semibold">
            Google Privacy & Policy
          </span>{" "}
          and <span className="underline">Terms of Service apply.</span>
        </p>
        {/* <Link
          to="/captain-login"
          className="bg-[#10b461] flex items-center justify-center text-white font-semibold mb-4 rounded px-4 py-2 w-full text-lg placeholder:text-base"
        >
          Sign in as Captain
        </Link> */}
      </div>
    </div>
  );
};

export default CaptainLogin;
