import React from "react";
import backgroundImage from "../assets/background.png";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div
        className=" h-screen pt-8 flex justify-between flex-col w-full bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <img
          className="w-16 ml-8"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Uber_logo_2018.svg/2560px-Uber_logo_2018.svg.png"
          alt=""
        />
        <div className="bg-white pb-7 py-5 px-4">
          <h2 className="text-3xl font-bold">Get Started With Uber</h2>
          <Link
            to="/login"
            className="flex items-center justify-center w-full bg-black text-white py-3 rounded-lg mt-5"
          >
            Continue
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
