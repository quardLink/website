import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="py-5 sm:px-19 px-5">
      <div className="screen-max-width">
        <div className="bg-neutral-700 my-5 h-[1px] w-full" />
        <div className="flex md:flex-row flex-col md:items-center justify-between">
          <p className="font-semibold text-gray  text-xs">
            Copyright @ 2025 Quardlink All rights reserved.
          </p>
          <div className="flex">
            <Link to="/#service" className="font-semibold text-gray text-xs">
              service <span>| </span>
            </Link>
            <Link to="/#about" className="font-semibold text-gray text-xs">
              about <span> | </span>
            </Link>
            <Link to="/creation" className="font-semibold text-gray text-xs">
              creation <span>| </span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
