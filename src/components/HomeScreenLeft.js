import React from "react";
import { MdGpsFixed, MdPlace } from "react-icons/md";
const HomeScreenLeft = () => {
   return (
      <div className="  md:w-auto flex flex-col overflow-x-hidden bg-purple100 h-screen">
         <header className="flex relative justify-between p-4">
            <button className="px-4 py-2 shadow-md text-gray-50 bg-gray-500">
               Search for places
            </button>
            <MdGpsFixed
               color="white"
               className="bg-gray-500 text-gray-50 text-4xl p-2 box-border rounded-full"
            />
         </header>
         <div className="relative h-80 mt-4      ">
            <div className="w-bg absolute left-1/2 top-2/4 transform-translate">
               <img
                  className="  opacity-10  w-bg   h-full    overflow-x-hidden  "
                  src="/images/Cloud-background.png"
                  alt=""
               />
            </div>
            <img
               src="/images/Shower.png"
               className="absolute left-2/4 top-2/4 transform-translate  max-w-1 w-40 "
               alt=""
            />
         </div>
         <div className="flex -mt-9 flex-col justify-center items-center">
            <h2 className="font-medium text-174 text-gray-300">
               15
               <span className="font-medium text-gray-400  text-5xl">
                  °C
               </span>
            </h2>
            <h3 className="font-medium text-5xl text-gray-400">
               Shower
            </h3>
            <span className="mt-16 text-xl text-gray-400">
               Today &nbsp;&nbsp;&nbsp;•{" "}
               <span>&nbsp;&nbsp;&nbsp; Frid, 5 Jun</span>
            </span>
            <div className="flex justify-center mt-6 font-medium text-lg  text-gray-400 items-center">
               <MdPlace size="26" /> &nbsp;Helsinki
            </div>
         </div>
      </div>
   );
};

export default HomeScreenLeft;
