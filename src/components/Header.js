import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="fixed left-0 right-0 top-0 h-11 bg-gray-200 flex items-center justify-between px-5">
      <div className="cursor-pointer">Brand Logo</div>
      <ul className="flex items-center h-full p-2">
        <Link
          to="/"
          className="border border-gray-300 hover:bg-opacity-80 hover:bg-gray-500 hover:text-white duration-200 h-full mr-2 flex items-center p-4 cursor-pointer"
        >
          Home
        </Link>
        <Link
          to="/crud"
          className="border border-gray-300 hover:bg-opacity-80 hover:bg-gray-500 hover:text-white duration-200 h-full mr-2 flex items-center p-4 cursor-pointer"
        >
          Crud
        </Link>
        <Link
          to="/quiz"
          className="border border-gray-300 hover:bg-opacity-80 hover:bg-gray-500 hover:text-white duration-200 h-full mr-2 flex items-center p-4 cursor-pointer"
        >
          Quis
        </Link>
        <Link
          to="/about"
          className="border border-gray-300 hover:bg-opacity-80 hover:bg-gray-500 hover:text-white duration-200 h-full mr-2 flex items-center p-4 cursor-pointer"
        >
          About
        </Link>
      </ul>
    </div>
  );
}
