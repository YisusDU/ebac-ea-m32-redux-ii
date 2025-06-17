import React, { SetStateAction } from "react";
import XIcon from "../../../assets/IMG/x-solid.svg";
import { Guide } from "../../GuideReguister/types";
import HistoryTable from "./HistoryTable";
import HistoryPath from "./HistoryPath";
import { useModalGuides } from "../../../hooks/useModalGuides";
import { ModalHistoryContainer } from "./styles";
//Types for this component
export interface ModalProp {
  modalData: string;
  guides: Guide[];
  setModalData: React.Dispatch<SetStateAction<string>>;
  isOpenModal: string;
  setIsOpenModal: React.Dispatch<SetStateAction<"Update" | "History" | "">>;
}

//Types for the customhook
export interface ModalGuidesProps {
  guides: Guide[];
  modalData: string;
  setModalData: React.Dispatch<React.SetStateAction<string>>;
  setIsOpenModal: React.Dispatch<
    React.SetStateAction<"" | "Update" | "History">
  >;
}

const ModalHistory = ({
  modalData,
  guides,
  isOpenModal,
  setModalData,
  setIsOpenModal,
}: ModalProp) => {
  const { guideIndex, currentGuide, cleanGuideData } = useModalGuides({
    guides,
    modalData,
    setModalData,
    setIsOpenModal,
  });

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
        <HistoryTable guideIndex={guideIndex} currentGuide={currentGuide} />
        <HistoryPath guideIndex={guideIndex} currentGuide={currentGuide} />
      </section>
    </ModalHistoryContainer>
  );
};

export default ModalHistory;
