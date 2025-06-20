import React from "react";
import XIcon from "../../../assets/IMG/x-solid.svg";
import HistoryTable from "./HistoryTable";
import HistoryPath from "./HistoryPath";
import { useModalGuides } from "../../../hooks/useModalGuides";
import { ModalHistoryContainer } from "./styles";
import { useAppSelector } from "../../../hooks/useStoreTypes";

const ModalHistory = () => {
  //Redux state typeModal
  const isOpenModal = useAppSelector(
    (state) => state.guides.modalData.typeModal
  );

  const { cleanGuideData } = useModalGuides();

  return (
    <ModalHistoryContainer
      className={`table__modal--history ${
        isOpenModal === "History" ? "" : " hiddeModal"
      }`}
      role="dialog"
      aria-modal="true"
    >
      <i className="tableHistory__closeModal">
        <img src={XIcon} alt="close--modal" onClick={cleanGuideData} />
      </i>
      <h3 className="tableModal__title">Historial de envío</h3>
      <section className="tableModal__container">
        {/* Current info into a table */}
        <HistoryTable />
        <HistoryPath />
      </section>
    </ModalHistoryContainer>
  );
};

export default ModalHistory;
