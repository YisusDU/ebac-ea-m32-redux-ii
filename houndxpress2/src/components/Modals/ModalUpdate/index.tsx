import React, { SetStateAction } from "react";
import { ModalUpdateContainer } from "./styles";
import UpdateTable from "./UpdateTable";
import UpdateForm from "./UpdateForm";
import { Guide } from "../../../types/guides";
import { useModalGuides } from "../../../hooks/useModalGuides";
import XIcon from "../../../assets/IMG/x-solid.svg";
import { useAppSelector } from "../../../hooks/useStoreTypes";

export interface ModalUpdateProp {
  modalData: string;
  guides: Guide[];
  setGuides: React.Dispatch<SetStateAction<Guide[]>>;
  setModalData: React.Dispatch<SetStateAction<string>>;
  isOpenModal: string;
  setIsOpenModal: React.Dispatch<SetStateAction<"Update" | "History" | "">>;
}

const ModalUpdate = () => {
  //Redux state typeModal
  const isOpenModal = useAppSelector(
    (state) => state.guides.modalData.typeModal
  );

  const { cleanGuideData } = useModalGuides();

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
      <UpdateTable />
      <UpdateForm />
    </ModalUpdateContainer>
  );
};

export default ModalUpdate;
