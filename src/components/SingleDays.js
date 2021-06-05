import React from "react";

const SingleDays = ({ dia }) => {
   return (
      <div className="  w-full  max-w-13 flex flex-col justify-around items-center bg-purple100 h-72">
         <p className="text-gray-100 relative top-3  text-2xl">
            {dia}
         </p>
         <img
            className="w-24 relative bottom-4"
            src="/images/HeavyRain.png"
            alt=""
         />
         <span className="text-gray-200 text-2xl relative bottom-1">
            16°C &nbsp;&nbsp; &nbsp;
            <span className="text-gray-400">11°C</span>
         </span>
      </div>
   );
};

export default SingleDays;
