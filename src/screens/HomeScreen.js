import React, { useEffect, useState } from "react";
import HomeScreenLeft from "../components/HomeScreenLeft";
import HomeScreenRight from "../components/HomeScreenRight";
import axios from "axios";
function HomeScreen() {
   const [location, setLocation] = useState({});

   const succesfulLookup = (position) => {
      const { latitude, longitude } = position.coords;
      axios({
         method: "GET",
         headers: {
            "Content-Type": "application/x-www-form-urlencoded",
         },
         url: `/api/location/search/?lattlong=${latitude},${longitude}`,
      }).then((res) => {
         axios({
            method: "GET",
            headers: {
               "Content-Type": "application/x-www-form-urlencoded",
            },
            url: `   /api/location/${res.data[0].woeid}/`,
         }).then((res) => {
            console.log(res);
            setLocation(res);
         });
      });
   };
   useEffect(() => {
      if (window.navigator.geolocation) {
         console.log(
            window.navigator.geolocation.getCurrentPosition(
               succesfulLookup,
               console.log
            )
         );

         console.log(location, "location");
      }
   }, []);

   return (
      <div className="grid md:grid-cols-home mx-auto bg-purple100  ">
         <HomeScreenLeft data={location} />
         <HomeScreenRight />
      </div>
   );
}

export default HomeScreen;
