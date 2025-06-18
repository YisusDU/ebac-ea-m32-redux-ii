import { Guide } from "./guides";

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

//History modal
export interface HistoryGuide {
  guideIndex: number;
  currentGuide: Guide;
}
