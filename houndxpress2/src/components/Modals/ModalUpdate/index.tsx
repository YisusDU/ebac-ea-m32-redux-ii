import React, { SetStateAction } from "react";
import { ModalUpdateContainer } from "./styles";
import UpdateTable from "./UpdateTable";
import UpdateForm from "./UpdateForm";
import { Guide } from "../../GuideReguister/types";
import { useModalGuides } from "../../../hooks/useModalGuides";
import XIcon from "../../../assets/IMG/x-solid.svg";

export interface ModalUpdateProp {
  modalData: string;
  guides: Guide[];
  setGuides: React.Dispatch<SetStateAction<Guide[]>>;
  setModalData: React.Dispatch<SetStateAction<string>>;
  isOpenModal: string;
  setIsOpenModal: React.Dispatch<SetStateAction<"Update" | "History" | "">>;
}

const ModalUpdate = ({
  modalData,
  guides,
  setGuides,
  isOpenModal,
  setModalData,
  setIsOpenModal,
}: ModalUpdateProp) => {
  const { guideIndex, currentGuide, cleanGuideData } = useModalGuides({
    guides,
    modalData,
    setModalData,
    setIsOpenModal,
  });

  return (
    <ModalUpdateContainer
      className={`table__modal--Update ${
        isOpenModal === "Update" ? "" : " hiddeModal"
      }`}
    >
      <i className="table__closeModal">
        <img src={XIcon} alt="close--modal" onClick={cleanGuideData} />
      </i>
      <h3 className="tableModal__title">Actualizar estado del envío</h3>
      <UpdateTable guideIndex={guideIndex} currentGuide={currentGuide} />
      <UpdateForm guideIndex={guideIndex} currentGuide={currentGuide} setGuides={setGuides}/>
    </ModalUpdateContainer>
  );
};

export default ModalUpdate;
