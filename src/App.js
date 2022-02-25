import React from "react";

// Components
import Navbar from "./components/navbar/navbar.component";
import HeroComponent from "./components/hero/hero.components";
import GetStarted from "./components/Content/getstartedcontent.component";
import HikingEssentials from "./components/Content/hikingessentialcontent.components";
import WhereYouGo from "./components/Content/lastcontent.component";
import Footer from "./components/footer/footer.component";

function App() {
  return (
    <>
      <div className="bg-[#1f272c]"> 
        <Navbar className=""/>
        <HeroComponent />
        <GetStarted />
        <HikingEssentials />
        <WhereYouGo />
        <Footer />
      </div>
    </>
  );
};

export default App;
