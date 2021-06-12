import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import SingleDays from "./SingleDays";
import SingleHightlights from "./SingleHightlights";

const HomeScreenRight = ({ data }) => {
   const [date, setDate] = useState("");
   useEffect(() => {
      setDate(format(new Date(), "yyyy-MM-d"));
   }, []);
   return (
      <div className="bg-purple200 ">
         <div className=" min-h-screen mx-auto   px-3 max-w-6xl  2xl:pt-5 2xl:px-32   ">
            <header className="flex justify-end items-center 2xl:py-0 py-8 2xl:pt-0 pr-10">
               <p className="bg-gray-200 text-2xl rounded-full w-11 h-11  flex items-center mr-5 justify-center font-bold text-gray-900">
                  °C
               </p>
               <p className="text-gray-200 rounded-full  flex items-center justify-center w-11 h-11 text-2xl bg-purple000 font-bold">
                  °F
               </p>
            </header>
            <div className="grid  lg:grid-cols-3 xl:grid-cols-5 lg:grid-rows-1  mt-6 text-gray-400 grid-cols-2 grid-rows-3 xl:gap-3 place-items-center 2xl:gap-4 gap-9 ">
               {data.data.consolidated_weather &&
                  data.data.consolidated_weather
                     .filter((arrays) => {
                        return arrays.applicable_date !== date;
                     })
                     .map((data) => {
                        return (
                           <SingleDays
                              day={date}
                              key={data.id}
                              data={data}
                           />
                        );
                     })}
            </div>
            <h2 className="text-gray-200 text-left font-medium  py-5  text-3xl mt-6">
               Today’s Hightlights{" "}
            </h2>
            <div className=" w-full grid grid-cols-1 grid-rows-1 md:grid-rows-2 md:ml-4 lg:ml-0 md:grid-cols-2 gap-5 2xl:gap-10   place-items-center  ">
               <SingleHightlights data={data} wind large />
               <SingleHightlights data={data} humidity large />
               <SingleHightlights data={data} visibility />
               <SingleHightlights data={data} air />
            </div>
         </div>
      </div>
   );
};

export default HomeScreenRight;
