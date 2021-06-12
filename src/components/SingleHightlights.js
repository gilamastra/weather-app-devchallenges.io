import React, { useEffect, useState } from "react";

const SingleHightlights = ({
   large,
   wind,
   air,
   visibility,
   data,
   humidity,
}) => {
   useEffect(() => {
      console.log(data);
      if (data.data) {
         setSingleData(data.data.consolidated_weather[0]);
      }
   }, [data]);
   const [singleData, setSingleData] = useState("");

   return (
      <div
         className={` w-full max-w-sm lg:max-w-full grid  place-items-center   ${
            large ? "h-56 grid-rows-3" : "h-48 grid-rows-3"
         }  bg-purple100`}
      >
         {singleData && (
            <>
               <p className="text-gray-100 text-xl">
                  {(wind && "Wind Status") ||
                     (air && "Air Pressure") ||
                     (visibility && "Visibility") ||
                     (humidity && "Humidity")}
               </p>
               <p className="text-8xl font-bold text-gray-100">
                  {(wind && singleData.wind_speed.toFixed(0)) ||
                     (visibility &&
                        singleData.visibility.toFixed(1)) ||
                     (air && singleData.air_pressure.toFixed(0)) ||
                     (humidity && singleData.humidity.toFixed(0))}
                  <span className="text-5xl relative bottom-2 ml-1 font-medium">
                     {(wind && "mph") ||
                        (visibility && "miles") ||
                        (air && "mb") ||
                        (humidity && "%")}
                  </span>
               </p>
               {large && wind && (
                  <p className="text-gray-200 text-xl">
                     {singleData.wind_direction_compass}
                  </p>
               )}
               {large && humidity && (
                  <div className=" mt-3- w-3/4 h-3 flex justify-between relative text-xl font-bold  rounded-md bg-white ">
                     <div className="flex justify-between w-full">
                        <div
                           className={`absolute left-0 w-w${singleData.humidity}   rounded-md bg-yellow-300 h-full`}
                        ></div>
                        <p className=" text-gray-400 relative -top-7">
                           0
                        </p>
                        <p className=" text-gray-400  relative -top-7">
                           50
                        </p>
                        <p className=" text-gray-400  relative -top-7">
                           100
                        </p>
                        <p className=" text-gray-400  absolute right-0 top-3">
                           %
                        </p>
                     </div>
                  </div>
               )}
            </>
         )}
      </div>
   );
};
export default SingleHightlights;
