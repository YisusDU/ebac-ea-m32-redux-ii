import React, { useState, useEffect, useRef } from "react";
import { ThemeProvider } from "styled-components";
import Theme from "../theme/index";
import GlobalStyles from "../theme/GlobalStyles";
import { Guide } from "../types/guides";
import { toggleMenu } from "../state/guides.slice";
import Header from "../components/Header";
import Banner from "../components/Banner";
import GuideRegister from "../components/GuideReguister";
import GeneralState from "../components/GeneralState";
import GuideList from "../components/GuideList";
import Footer from "../components/Footer";
import ModalHistory from "../components/Modals/ModalHistory";
import ModalUpdate from "../components/Modals/ModalUpdate";
import { useAppDispatch, useAppSelector } from "../hooks/useStoreTypes";

const App = () => {
  //function to change display of menu to fixed or relative
  const [headerHeight, setHeaderHeight] = useState(0);
  const headerRef = useRef<HTMLDivElement>(null);
  const mainRef = useRef<HTMLDivElement>(null);
  const [modalData, setModalData] = useState<string>("");
  const [isOpenModal, setIsOpenModal] = useState<"Update" | "History" | "">("");
  const [guides, setGuides] = useState<Guide[]>([
    {
      guide__number: "12345678",
      guide__origin: "Detroit",
      guide__destination: "Atlanta",
      guide__recipient: "Rick",
      guide__stage: [
        {
          guide__date: "2025-05-25",
          guide__status: "Pendiente",
          guide__hour: "12:34",
        },
      ],
    },
    {
      guide__number: "12345",
      guide__origin: "Ciudad A",
      guide__destination: "Ciudad B",
      guide__recipient: "Persona X",
      guide__stage: [
        {
          guide__date: "2023-10-01",
          guide__status: "Pendiente",
          guide__hour: "09:15",
        },
        {
          guide__date: "2023-10-02",
          guide__status: "En tránsito",
          guide__hour: "17:42",
        },
      ],
    },
    {
      guide__number: "67890",
      guide__origin: "Ciudad C",
      guide__destination: "Ciudad D",
      guide__recipient: "Persona Y",
      guide__stage: [
        {
          guide__date: "2023-10-01",
          guide__status: "Pendiente",
          guide__hour: "08:23",
        },
        {
          guide__date: "2023-10-02",
          guide__status: "En tránsito",
          guide__hour: "19:08",
        },
      ],
    },
    {
      guide__number: "54321",
      guide__origin: "Ciudad E",
      guide__destination: "Ciudad F",
      guide__recipient: "Persona Z",
      guide__stage: [
        {
          guide__date: "2023-09-28",
          guide__status: "Pendiente",
          guide__hour: "10:55",
        },
        {
          guide__date: "2023-09-29",
          guide__status: "En tránsito",
          guide__hour: "14:27",
        },
        {
          guide__date: "2023-09-30",
          guide__status: "Entregado",
          guide__hour: "18:36",
        },
      ],
    },
    {
      guide__number: "98765",
      guide__origin: "Ciudad G",
      guide__destination: "Ciudad H",
      guide__recipient: "Persona N",
      guide__stage: [
        {
          guide__date: "2023-10-03",
          guide__status: "Pendiente",
          guide__hour: "15:02",
        },
      ],
    },
  ]);

  //Redux state
  const dispatch = useAppDispatch();
  const menuDisplay = useAppSelector((state) => state.guides.menuDisplay);
  //Function to listen the scroll event and change the display of the menu
  useEffect(() => {
    const changeDisplay = () => {
      if (window.scrollY > 165) {
        dispatch(toggleMenu(true));
      } else {
        dispatch(toggleMenu(false));
      }
    };
    window.addEventListener("scroll", changeDisplay);
    // Cleanup the event listener on component unmount
    return () => window.removeEventListener("scroll", changeDisplay);
  }, []);

  //Take the height of header when change menuDisplay to true
  useEffect(() => {
    if (menuDisplay && headerRef.current) {
      setHeaderHeight(headerRef.current.offsetHeight);
    } else {
      setHeaderHeight(0);
    }
  }, [menuDisplay]);

  //Aply height of header to main element
  useEffect(() => {
    if (mainRef.current) {
      mainRef.current.style.marginTop = `${headerHeight}px`;
    }
  }, [headerHeight]);

  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyles />
      <Header ref={headerRef} />
      <main ref={mainRef}>
        <Banner />
        <GuideRegister />
        <GeneralState />
        <GuideList
          setModalData={setModalData}
          setIsOpenModal={setIsOpenModal}
        />
      </main>
      <Footer />
      <ModalHistory
        setModalData={setModalData}
        modalData={modalData}
        guides={guides}
        isOpenModal={isOpenModal}
        setIsOpenModal={setIsOpenModal}
      />
      <ModalUpdate
        setModalData={setModalData}
        modalData={modalData}
        guides={guides}
        setGuides={setGuides}
        isOpenModal={isOpenModal}
        setIsOpenModal={setIsOpenModal}
      />
    </ThemeProvider>
  );
};

export default App;
