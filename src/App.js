import React from "react";
import "./App.css";

// Components
import Navbar from "./components/navbar/navbar.component";
import HeroComponent from "./components/hero/hero.components";
import HikingEssentials from "./components/Content/hikingessentialcontent.components";
import WhereYouGo from "./components/Content/lastcontent.component";
import Footer from "./components/footer/footer.component";

function App() {
  return (
    <>
      <div>
        <Navbar />
        <HeroComponent />
        <HikingEssentials />
        <WhereYouGo />
        <Footer />
      </div>
    </>
  );
}

export default App;
