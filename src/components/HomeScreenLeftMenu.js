import React from "react";
import {
   AiOutlineClose,
   AiOutlineSearch,
   AiOutlineRight,
} from "react-icons/ai";
const HomeScreenLeftMenu = () => {
   return (
      <div className="bg-purple100 min-h-screen">
         <AiOutlineClose
            size="26"
            color="white"
            className="float-right mr-3 mt-3"
         />
         <div className="clear-both"></div>

         <div className="flex mt-7 mx-3 justify-between">
            <div className="flex items-center w-3/4 border px-3 py-2 border-gray-400 ">
               <AiOutlineSearch
                  color="#616475"
                  size="22"
                  className="box-border mr-4  "
               />
               <input
                  className="bg-purple100 text-gray-200 w-full outline-none"
                  type="text"
                  placeholder="search location"
               />
            </div>
            <input
               className="px-4 cursor-pointer duration-200  hover:bg-blue-900 bg-blue-700 text-gray-200"
               type="button"
               value="Search"
            />
         </div>
      </div>
   );
};

export default HomeScreenLeftMenu;
