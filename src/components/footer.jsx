import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Footer = () => {
    return (
        <div className="text-white grid grid-cols-1 md:grid-cols-3 gap-12 p-6"> 
        {/* to move down the footer incase it doesnt mt-[62vh] */}
            <div className="flex" data-aos ="fade-right" data-aos-duration="2000">
                <i className="fa-solid fa-code text-[#5D5DFF] text-2xl md:text-3xl px-4"></i> 
                <p className="font-medium text-gray-300 text-1xl md:text-3xl ">CodeRound</p>
            </div>

            <div>
                <ul className="text-gray-300" data-aos ="fade-down" data-aos-duration="2000">
                    <li className="text-gray-400 font-semibold mb-2">Resources</li>
                    <li className="font-semibold px-0 py-1"><Link to="/Home">Pricing</Link></li>
                    <li className="font-semibold px-0 py-1"><Link to="/job-portal">Job Portal</Link></li>
                    <li className="font-semibold px-0 py-1"><Link to="/profile">Profile</Link></li>
                </ul>
            </div>

            <div className="border-t md:border-t-0 md:border-l border-gray-600 md:pl-6 pt-4 md:pt-0" data-aos ="fade-left" data-aos-duration="2000">
                <button className="bg-[#5D5DFF] text-white px-6 py-1 rounded-4xl font-bold cursor-pointer">Contact us</button>
                <ul className="text-gray-300 py-2">
                    <li className="px-0 py-1 hover:cursor-pointer">Privacy Policy</li>
                    <li className="px-0 py-1 hover:cursor-pointer">Terms & Conditions</li>
                    <li className="px-0 py-1">Copyright © 2024 CodeRound AI</li>
                </ul>
            </div>
        </div>
    );
}

export default Footer;
