import React from "react";
import HomeScreenLeft from "../components/HomeScreenLeft";
import HomeScreenRight from "../components/HomeScreenRight";

function HomeScreen() {
   return (
      <div className="grid md:grid-cols-home mx-auto  ">
         <HomeScreenLeft />
         <HomeScreenRight />
      </div>
   );
}

export default HomeScreen;