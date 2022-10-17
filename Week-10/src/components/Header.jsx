import React from "react";

function Header() {
  return (
    <div className="container mx-auto">
      <div className="flex flex-row h-10 ml-3 align-items center  w-full mt-2">
        <div className="text-2xl flex justify-start leading-10 ml-4 uppercase font-black">
          Shortly
        </div>
        <div className="flex flex-row grow justify-center text-blue-600 leading-10 ml-4">
          <a href="#"> Features</a>
          <a href="#" className="ml-4">
            {" "}
            Pricing
          </a>
          <a href="#" className="ml-4">
            {" "}
            Resources
          </a>
        </div>
        <div className="flex flex-row justify-start leading-10 ml-5 text-blue-600">
          <a href="#" className="mr-3">
            Login
          </a>
          <a href="#" className="mr-3">
            Sign Up
          </a>
        </div>
      </div>
    </div>
  );
}

export default Header;
