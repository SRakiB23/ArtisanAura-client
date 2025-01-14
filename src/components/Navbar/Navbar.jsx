import { Link, NavLink } from "react-router-dom";
import "animate.css";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { useTypewriter } from "react-simple-typewriter";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [showName, setShowName] = useState(false);

  const handleLogOut = () => {
    logOut()
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const toggleName = () => {
    setShowName(!showName);
  };

  const navLinks = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/allarts&crafts">All Art & Craft Items</NavLink>
      </li>
      <li>
        <NavLink to="/addarts">Add Craft Item</NavLink>
      </li>
      <li>
        <NavLink to="/myarts&crafts">My Art&Craft List</NavLink>
      </li>
      <li>
        <NavLink to="/login">Login</NavLink>
      </li>
      <li>
        <NavLink to="/register">Registration</NavLink>
      </li>
    </>
  );

  return (
    <div>
      <div className="navbar md:max-w-7xl mx-auto">
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
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navLinks}
            </ul>
          </div>
          <Link to="/">
            <img
              className="w-48"
              src="https://i.ibb.co/LR5rfTJ/Screenshot-2024-04-29-at-11-40-30-AM.png"
              alt=""
            />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLinks}</ul>
        </div>
        <div>
          <label className="flex cursor-pointer gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="5" />
              <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
            </svg>
            <input
              type="checkbox"
              value="synthwave"
              className="toggle theme-controller"
              onChange={(e) => {
                if (e.target.checked) {
                  document.body.setAttribute("data-theme", "dark");
                  document.body.classList.add("text-white");
                  document.body.classList.remove("text-black");
                } else {
                  document.body.setAttribute("data-theme", "light");
                  document.body.classList.add("text-black");
                  document.body.classList.remove("text-white");
                }
              }}
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
            </svg>
          </label>
        </div>
        <div className="navbar-end flex items-center">
          {user?.email ? (
            <div className="dropdown dropdown-end flex items-center">
              <div
                className="relative"
                onMouseEnter={toggleName}
                onMouseLeave={toggleName}
              >
                <img
                  alt="User avatar"
                  src={user ? user.photoURL : "nai"}
                  className="w-10 h-10 rounded-full cursor-pointer"
                />
                {showName && (
                  <span className="md:absolute top-1 bg-white w-32 rounded-lg py-1 px-2">
                    {user.displayName}
                  </span>
                )}
              </div>
              <button onClick={handleLogOut} className="btn bg-yellow-300 ml-2">
                LogOut
              </button>
            </div>
          ) : (
            <Link to="/login" className="btn bg-yellow-400 ml-2 font-bold">
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
