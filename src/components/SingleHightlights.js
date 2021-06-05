import React from "react";

const SingleHightlights = ({ large }) => {
   return (
      <div
         className={` w-full max-w-sm lg:max-w-full grid  place-items-center   ${
            large ? "h-52 grid-rows-3" : "h-40 grid-rows-3"
         }  bg-purple100`}
      >
         <p className="text-gray-100 text-2xl">Wind status</p>
         <p className="text-7xl font-bold text-gray-100">
            7<span className="text-4xl font-medium">mph</span>
         </p>
         {large && <p>Algo</p>}
      </div>
   );
};

export default SingleHightlights;
