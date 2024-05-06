import React from "react";

export default function Navbar() {
  return (
    <nav className="bg-blue-100 flex h-10 justify-items-end md:h-16">
      <div>
        <img
          className="h-8 w-11 mx-2 my-1 md:h-14 md:my-1 md:w-24"
          src="./gg.jpeg"
        />
      </div>
      <div className="my-2 mr-3 ml-auto md:text-3xl md:my-3">
        <h1 className="ml-auto">GYAN GANGA GRADES</h1>
      </div>
    </nav>
  );
}
