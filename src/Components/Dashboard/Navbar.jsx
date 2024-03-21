import  { useState } from "react";
import {FaBarsStaggered} from 'react-icons/fa6'
import { Link } from "react-router-dom";


const Navbar = () => {
  const [nav, setNav] = useState(false)
    const togglenav =() =>{
      setNav(!nav);
      console.log(nav);
    } 

  return (
    <header className="">
      <nav className="flex justify-between items-center w-[92%] mx-auto py-5">
        <div>
          <a className=" text-purple font-bold text-2xl" href="/"> CHATTER</a>
        </div>
        <div className="md:static absolute md:min-h-fit hidden  min-h-[60vh] left-0 top-[9%] md:w-auto w-full md:flex items-center px-5 ">
          <ul className=" flex md:flex-row flex-col  md:items-center md:gap-[4vw] gap-8">
            <li>
              <a className="hover:text-purple" href="">Home</a>
            </li>
            <li>
              <a className="hover:text-purple" href="">About Us</a>
            </li>
            <li>
              <a className="hover:text-purple" href="">Contact</a>
            </li>
            <li>
              <a className="hover:text-purple" href="">Blog</a>
            </li>
          </ul>
        </div>
        <div>
         <div className="flex gap-4">
          <Link  to='/login'>
          <button className="hidden md:block border-2 px-8 py-2 rounded-sm  hover:bg-purple hover:text-white">
           Login
          </button>
          </Link>
         <Link  to='/signup'>
          <button className="hidden md:block border-2 px-8 py-2 rounded-md bg-purple text-white hover:text-purple hover:bg-white">
           Sign Up
          </button>
         </Link>
         </div>
          
        <FaBarsStaggered onClick={togglenav} size={20} className="md:hidden" ></FaBarsStaggered>
        </div>
        {/* mobile nav starts */}
        <div className=
        {nav ?
          "flex flex-col  z-40  absolute top-24 text-2xl pt-10  md:hidden  left-0 h-[400px] w-full text-center  rounded-md bg-purple"  : "hidden"}
        >
          <ul  className= "flex md:flex-row flex-col pt-4 text-white  md:items-center md:gap-[4vw] gap-8">
            <li>
              <a className="hover:text-purple" href="">Home</a>
            </li>
            <li>
              <a className="hover:text-purple" href="">About Us</a>
            </li>
            <li>
              <a className="hover:text-purple" href="">Contact Us</a>
            </li>
            <li>
              <a className="hover:text-purple" href="">Blog</a>
            </li>
          </ul>
        </div>
        {/* mobile nav ends */}
      </nav>
    </header>
  );
};

export default Navbar;
