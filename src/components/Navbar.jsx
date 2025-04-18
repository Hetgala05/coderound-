import React, { useState } from "react";
import { Link } from "react-router-dom";
import './Navbar.css';

const Navbar = () => {
  const [nav, setNav] = useState(true);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="max-w-[1240px] h-24 flex justify-between mx-auto px-4 items-center">
      <h1 className="text-3xl text-[#5D5DFF] hover: cursor-pointer">
        <Link to="/Home"><i className="fa-solid fa-code"></i></Link>
      </h1>

      {/* Desktop Menu */}
      <ul className="font-medium text-[#5D5DFF] hidden md:flex">
        <li class="nav-item"><Link to="/Home">Products</Link></li>
        <li class="nav-item"><Link to="/Home">How it works</Link></li>
        <li class="nav-item"><Link to="/Home">Pricing</Link></li>
        <li class="nav-item"><Link to="/job-portal">Job Portal</Link></li>
        <li class="nav-item"><Link to="/profile">Profile</Link></li>
      </ul>

      {/* Mobile Hamburger Icon */}
      <button onClick={handleNav} className="block md:hidden z-20 relative">
        {!nav ? (
          <i className="fa fa-times text-2xl text-white"></i>
        ) : (
          <i className="fa fa-bars text-2xl text-white"></i>
        )}
      </button>

      {/* Mobile Menu */}
      <div
        className={
          !nav
            ? "fixed top-0 left-0 w-full md:hidden bg-[#000300] px-4 pt-6 pb-8 z-10 transition-all duration-500 ease-in-out"
            : "fixed top-[-100%] left-0 w-full md:hidden bg-[#000300] px-4 pt-6 pb-8 z-10 transition-all duration-500 ease-in-out"
        }
      >
        <h1 className="text-3xl text-[#5D5DFF] mb-4">
          <i className="fa-solid fa-code"></i>
        </h1>
        <ul className="text-[#5D5DFF]">
          <li class="nav-item"><Link to="/">Products</Link></li>
          <li class="nav-item"><Link to="/">How it works</Link></li>
          <li class="nav-item"><Link to="/">Pricing</Link></li>
          <li class="nav-item"><Link to="/job-portal">Job Portal</Link></li>
          <li class="nav-item"><Link to="/profile">Profile</Link></li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
