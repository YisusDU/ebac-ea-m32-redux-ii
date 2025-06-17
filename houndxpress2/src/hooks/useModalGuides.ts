import { ModalGuidesProps } from "../components/Modals/ModalHistory";

const useModalGuides = ({
  guides,
  modalData,
  setModalData,
  setIsOpenModal,
}: ModalGuidesProps) => {
  //Find the index of the guide loaded on the state modalData
  const guideIndex = guides.findIndex(
    (guide) => String(guide.guide__number.trim()) === String(modalData.trim())
  );

  //select the guide on question of all the guides
  const currentGuide = guides[guideIndex];

  const cleanGuideData = () => {
    setModalData("");
    setIsOpenModal("");
  };
  return { guideIndex, currentGuide, cleanGuideData };
};

export { useModalGuides };
