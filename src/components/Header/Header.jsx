import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  CloseOutlined,
  MenuOutlined,
} from "@ant-design/icons";
import AutoFunnelLogo from "../../assets/img/autofunnel-logo.png";

const Header = ({ activeSection, currentPage }) => {
  const activeStyle = "text-[#fff] inter-medium text-[16px]";
  const nonActiveStyle = "text-[#fff] inter-medium text-[16px]";
  const [menuOpen, setMenuOpen] = useState(false);
  const [isSticky, setSticky] = useState(false);

  const handleToggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const stickyPoint = 1;
      if (currentScrollY > stickyPoint) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const isActive = (section) => {
    // if (currentPage === "/") {
    //   return activeSection === section;
    // }
    // return currentPage.includes(section);
  };

  return (
    <header className="w-full max-w-[1140px] mx-auto">
      <div className="flex gap-[100px] sm:gap-[150px] z-[100] absolute py-[26px]">
        <div className="w-unset sm:w-[20%] text-[#C61E46] cursor-pointer">
          <Link to="/">
            <div className="flex gap-1 inter-bold text-[28px] leading-[36px] text-left">
              <img src={AutoFunnelLogo} alt="AutoFunnel" />
            </div>
          </Link>
        </div>

        <div className="flex gap-0 md:gap-[30px] w-[40%] sm:w-[80%] items-center justify-end pr-4 md:pr-0">
          <button
            className="text-[24px] md:hidden text-[#000] -mt-2"
            onClick={handleToggleMenu}
          >
            {menuOpen ? (
              <CloseOutlined
                style={isSticky ? { color: "#fff" } : { color: "#fff" }}
              />
            ) : (
              <MenuOutlined
                style={isSticky ? { color: "#fff" } : { color: "#fff" }}
              />
            )}
          </button>
          <div
            className={`md:flex md:items-center md:gap-[30px] md:top-[100px] `}
          >
            <Link to="/">
              <div className="flex hover:text-[#C61E46] bg-fixed transition duration-300 ease-in-out rounded-lg">
                <li
                  className={`flex ${
                    isActive("home") ? activeStyle : nonActiveStyle
                  }`}
                  onClick={() => setMenuOpen(false)}
                >
                  Blog
                </li>
              </div>
            </Link>
            <a href="/#WhatWeDo">
              <div className="flex hover:text-[#C61E46] bg-fixed transition duration-300 ease-in-out rounded-lg">
                <li
                  className={`flex ${
                    isActive("WhatWeDo") ? activeStyle : nonActiveStyle
                  }`}
                >
                  Support
                </li>
              </div>
            </a>
            <a href="/#Portfolio">
              <div className="flex hover:text-[#C61E46] bg-fixed transition duration-300 ease-in-out rounded-lg">
                <li
                  className={`flex ${
                    isActive("Portfolio") ? activeStyle : nonActiveStyle
                  }`}
                >
                  Pricing
                </li>
              </div>
            </a>
            <a href="/#OurClients">
              <div className="flex hover:text-[#C61E46] bg-fixed transition duration-300 ease-in-out rounded-lg">
                <li
                  className={`flex ${
                    isActive("OurClients") ? activeStyle : nonActiveStyle
                  }`}
                >
                  Login
                </li>
              </div>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;


{/* <div
            className={`md:flex md:items-center md:gap-[30px] md:top-[100px] 
            ${
              menuOpen
                ? "flex flex-col mt-6 md:top-[100px] absolute top-[32px] left-[0px] bg-[#000] w-[100%] py-[10px] px-[20px] gap-[14px] z-[100]"
                : "hidden"
            }
            `}
          ></div> */}