import React, { useEffect, useRef, useState } from "react";
import {
   AiOutlineClose,
   AiOutlineSearch,
   AiOutlineRight,
} from "react-icons/ai";

const HomeScreenLeftMenu = ({ setIsMenuOpen }) => {
   const [icon, setIcon] = useState(false);
   return (
      <div className=" px-4 md:px-1 lg:px-7 xl:px-10 2xl:px-14 bg-purple100 min-h-screen">
         <AiOutlineClose
            size="26"
            color="white"
            onClick={() => setIsMenuOpen(false)}
            className="float-right cursor-pointer mr-3 mt-3"
         />
         <div className="clear-both"></div>

         <div className="flex  mt-7 justify-between">
            <div className="flex sm:mr-1 items-center w-3/4 border  border-gray-400 ">
               <AiOutlineSearch
                  color="#616475"
                  size="22"
                  className="ml-3 box-border mr-4 sm:mr-1 "
               />
               <input
                  className="bg-purple100 text-gray-200 w-full h-full p-3  outline-none"
                  type="text"
                  placeholder="search location"
               />
            </div>
            <input
               className="px-5 md:px-1 lg:px-5 cursor-pointer duration-200  hover:bg-blue-900 bg-blue-700 text-gray-200"
               type="button"
               value="Search"
            />
         </div>
         <div
            onMouseLeave={() => setIcon(false)}
            onMouseEnter={() => setIcon(true)}
            className="flex duration-200  mt-9 lg:mt-11 py-5 px-3 cursor-pointer items-center border  hover:border hover:border-purple300 border-transparent justify-between w-full"
         >
            <p className="text-gray-100 text-lg ">London</p>
            <AiOutlineRight
               className={`duration-200 opacity-0 ${
                  icon && "opacity-100"
               }`}
               color="#a9a9a9"
            />
         </div>
      </div>
   );
};

export default HomeScreenLeftMenu;
