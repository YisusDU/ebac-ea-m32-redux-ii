import React, { useRef } from "react";
import { ThemeProvider } from "styled-components";
import Theme from "../theme/index";
import GlobalStyles from "../theme/GlobalStyles";
import Header from "../components/Header";
import Banner from "../components/Banner";
import GuideRegister from "../components/GuideReguister";
import GeneralState from "../components/GeneralState";
import GuideList from "../components/GuideList";
import Footer from "../components/Footer";
import ModalHistory from "../components/Modals/ModalHistory";
import ModalUpdate from "../components/Modals/ModalUpdate";
import useFixedHeader from "../hooks/useFixedHeader";

const App = () => {
  //function to change display of menu to fixed or relative
  const headerRef = useRef<HTMLElement>(null);
  const mainRef = useRef<HTMLElement>(null);

  useFixedHeader({ mainRef, headerRef });

  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyles />
      <Header ref={headerRef} />
      <main ref={mainRef}>
        <Banner />
        <GuideRegister />
        <GeneralState />
        <GuideList />
      </main>
      <Footer />
      <ModalHistory />
      <ModalUpdate />
    </ThemeProvider>
  );
};

export default App;
