import { Link } from "react-router-dom";

const Navbar = () => {
  const navOptions = <>
  <li><Link to='/'>Home</Link></li>
  <li><Link to='/form'>Form</Link></li>
  <li><Link to='/login'>Login</Link></li>
 
  </>;
  return (
    <>
      <div className="navbar fixed z-10 bg-opacity-30 max-w-screen-xl bg-black  text-white bg-base-100">
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
              {navOptions}
            </ul>
          </div>
          <img className="w-10 rounded-full" src="https://i.ibb.co/TgxLS06/download.jpg" alt="" />
          <a className="btn btn-ghost text-xl">BRTA</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navOptions}</ul>
        </div>
       
      </div>
    </>
  );
};

export default Navbar;
