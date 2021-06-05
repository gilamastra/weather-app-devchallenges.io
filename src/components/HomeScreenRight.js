import React from "react";
import SingleDays from "./SingleDays";
import SingleHightlights from "./SingleHightlights";

const HomeScreenRight = () => {
   return (
      <div className=" min-h-screen  px-3  bg-purple200 2xl:pt-10 2xl:px-32   ">
         <header className="flex justify-end items-center 2xl:py-0 py-8 2xl:pt-0 pr-10">
            <p className="bg-gray-200 text-2xl rounded-full w-11 h-11  flex items-center mr-5 justify-center font-bold text-gray-900">
               °C
            </p>
            <p className="text-gray-200 rounded-full  flex items-center justify-center w-11 h-11 text-2xl bg-purple000 font-bold">
               °F
            </p>
         </header>
         <div className="grid  lg:grid-cols-3 xl:grid-cols-5 lg:grid-rows-1  mt-6 text-gray-400 grid-cols-2 grid-rows-3 xl:gap-3 place-items-center 2xl:gap-4 gap-9 ">
            <SingleDays dia="Today" />
            <SingleDays dia="Tomorrow" />
            <SingleDays dia="7 Jun" />
            <SingleDays dia="8 Jun" />
            <SingleDays dia="9 Jun" />
         </div>
         <h2 className="text-gray-200 text-left font-medium  py-6  text-4xl mt-6">
            Today’s Hightlights{" "}
         </h2>
         <div className=" w-full grid grid-cols-1 grid-rows-1 md:grid-rows-2 md:ml-4 lg:ml-0 md:grid-cols-2 gap-5 2xl:gap-10   place-items-center  ">
            <SingleHightlights large />
            <SingleHightlights large />
            <SingleHightlights />
            <SingleHightlights />
         </div>
      </div>
   );
};

export default HomeScreenRight;
