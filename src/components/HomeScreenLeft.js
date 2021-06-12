import React, { useEffect, useState } from "react";
import { MdGpsFixed, MdPlace } from "react-icons/md";
import axios from "axios";
import HomeScreenLeftMenu from "./HomeScreenLeftMenu";
import {
   format,
   formatDistance,
   formatRelative,
   subDays,
} from "date-fns";

//=> "Today is a Friday"
const HomeScreenLeft = ({ data }) => {
   const [weatherImage, setweatherImage] = useState("");
   const [isMenuOpen, setIsMenuOpen] = useState(false);
   const [date, setDate] = useState();
   console.log(data, "data");
   useEffect(() => {
      setDate(format(new Date(), "eee, d MMM"));
   }, [data.data]);

   return (
      <div>
         {isMenuOpen ? (
            <HomeScreenLeftMenu setIsMenuOpen={setIsMenuOpen} />
         ) : (
            <div className="px-4 md:px-1 lg:px-7 xl:px-10 2xl:px-14 pt-6  md:w-full z-0  lex flex-col overflow-x-hidden bg-purple100  min-h-screen">
               <header className="flex relative z-10 justify-between p-4">
                  <input
                     className="px-4 duration-200 cursor-pointer filter hover:bg-gray-700 outline-none py-2 shadow-md text-gray-50 bg-gray-500"
                     onClick={() => setIsMenuOpen(true)}
                     type="button"
                     value="Search for places"
                  />
                  <MdGpsFixed
                     color="white"
                     onClick={() => setIsMenuOpen(true)}
                     className="hover:bg-gray-700 duration-200 bg-gray-500 cursor-pointer text-gray-50 text-4xl p-2 box-border rounded-full"
                  />
               </header>
               <div className="relative h-80 mt-4      ">
                  <div className="w-bg absolute left-1/2 top-2/4 transform-translate">
                     <img
                        className="  opacity-10  w-bg   h-full    overflow-x-hidden  "
                        src="/images/Cloud-background.png"
                        alt=" a"
                     />
                  </div>
                  {data.data && (
                     <img
                        className="absolute left-2/4 top-2/4 transform-translate  max-w-1 w-40"
                        src={`/images/${data.data.consolidated_weather[0].weather_state_name.replace(
                           " ",
                           ""
                        )}.png`}
                        alt=""
                     />
                  )}
               </div>
               <div className="flex -mt-9 flex-col justify-center items-center">
                  <h2 className="font-medium text-174 text-gray-300">
                     {data.data &&
                        data.data.consolidated_weather[0].the_temp.toFixed(
                           0
                        )}
                     <span className="font-medium text-gray-400  text-5xl">
                        °C
                     </span>
                  </h2>
                  <h3 className="font-medium text-5xl text-gray-400">
                     {data.data &&
                        data.data.consolidated_weather[0]
                           .weather_state_name}
                  </h3>
                  <span className="mt-16 text-xl text-gray-400">
                     Today &nbsp;&nbsp;&nbsp;•{" "}
                     <span>&nbsp;&nbsp;&nbsp; {date}</span>
                  </span>
                  <div className="flex justify-center mt-6 font-medium text-lg  text-gray-400 items-center">
                     <MdPlace size="26" /> &nbsp;
                     {data.data && data.data.title}
                  </div>
               </div>
            </div>
         )}
      </div>
   );
};

export default HomeScreenLeft;
