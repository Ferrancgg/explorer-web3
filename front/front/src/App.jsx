import { useState } from "react";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
// import Home from "./pages/Home/Home";
import Explorer from "./pages/Explorer/Explorer";
import AppRouter from "./AppRouter";

// import Main from "./components/Main/Main";
// import { Hero } from "./components/Hero/Hero";
// import FlexBox from "./components/FlexBox/FlexBox";
// import CardInfo from "./components/CardInfo/Cardinfo";

const App = () => {
  return (
    <>
      <Header> soy header</Header>
      {/* <Home /> */}
      {/* <Explorer/> */}
      <AppRouter/>

      <Footer>soy Footer</Footer>
    </>
  );
};

export default App;
