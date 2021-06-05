import React from "react";
import SingleDays from "./SingleDays";

const HomeScreenRight = () => {
   return (
      <div className="min-h-screen  bg-purple200 2xl:p-24   ">
         <div className="grid p-12 lg:grid-cols-3 xl:grid-cols-5 lg:grid-rows-1  mt-6 text-gray-400 grid-cols-2 grid-rows-3 place-items-center 2xl:gap-1 gap-9 ">
            <SingleDays dia="Today" />
            <SingleDays dia="Tomorrow" />
            <SingleDays dia="7 Jun" />
            <SingleDays dia="8 Jun" />
            <SingleDays dia="9 Jun" />
         </div>
      </div>
   );
};

export default HomeScreenRight;
