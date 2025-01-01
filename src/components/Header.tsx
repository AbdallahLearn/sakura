import React from "react";

function Header() {
  return (
    <>
     <div className="container m-auto pt-10">
      <div className="navbar">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <div className="navbar-center  hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-10 text-xl  ">
            <li>
              <a className="font-bold">المميزات</a>
            </li>
            <li>
              <a className="font-bold">خدماتنا</a>
            </li>
            <li>
              <a className="font-bold">الأسعار</a>
            </li>
            <li>
              <a className="font-bold">المصورين</a>
            </li>
          </ul>
        </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <a>المميزات</a>
              </li>
              <li>
                <a>خدماتنا</a>
              </li>
              <li>
                <a>الأسعار</a>
              </li>
              <li>
                <a>المصورين</a>
              </li>
            </ul>
          </div>
        </div>
        
       
        <div className="navbar-end">
          <a className="btn btn-ghost text-4xl text-white">S</a>
        </div>
        
      </div>
    </div></>
   
  );
}

export default Header;
