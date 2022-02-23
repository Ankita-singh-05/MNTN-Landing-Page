import React from 'react';

// Components
import Navbar from "./components/navbar/navbar.component";
import HeroComponent from './components/hero/hero.components';
import GetStarted from "./components/Content/getstartedcontent.component";

function App() {
  return (
    <>
      <Navbar />
      <HeroComponent />
      <GetStarted />
    </>
  );
}

export default App;
