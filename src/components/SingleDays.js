import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import { isTomorrow } from "date-fns";

const SingleDays = ({ data, day }) => {
   const [date, setDate] = useState("");
   const [isTomorrow, setIsTomorrow] = useState(false);

   useEffect(() => {
      let tomorrow = new Date().getDate() + 1;

      if (tomorrow.toString() === data.applicable_date.substr(8, 2)) {
         setIsTomorrow(true);
      }

      setDate(
         format(
            new Date(
               data.applicable_date.substr(0, 4),
               data.applicable_date.substr(5, 2),
               data.applicable_date.substr(8, 2)
            ),
            "E, d MMM	"
         ) //=> 'Nov'
      );
      console.log(date);
   }, []);

   return (
      <div className="  w-full  max-w-13 flex flex-col max-h-60 justify-around items-center bg-purple100 h-72">
         <p className="text-gray-100 relative top-3  text-2xl">
            {isTomorrow ? "Tomorrow" : date}
         </p>
         {data.id && (
            <img
               className="w-24 relative bottom-4"
               src={`/images/${data.weather_state_name.replace(
                  " ",
                  ""
               )}.png`}
               alt=""
            />
         )}

         <span className="text-gray-200 text-2xl relative bottom-1">
            {data.id && data.min_temp.toFixed(0)}°C &nbsp;&nbsp;
            &nbsp;
            <span className="text-gray-400">
               {data.id && data.max_temp.toFixed(0)}°C
            </span>
         </span>
      </div>
   );
};

export default SingleDays;
