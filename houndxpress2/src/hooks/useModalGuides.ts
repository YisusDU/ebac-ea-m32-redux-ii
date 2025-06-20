import { changeModalData } from "../state/guides.slice";
import { useAppDispatch, useAppSelector } from "./useStoreTypes";

const useModalGuides = () => {
  //Redux state
  const modalData = useAppSelector((state) => state.guides.modalData);
  const dispatch = useAppDispatch();

  //Clean Redux state modalData
  const cleanGuideData = () => {
    //Redux dispatch
    dispatch(changeModalData({ guideNumber: "", typeModal: "" }));
  };
  return { cleanGuideData };
};

export { useModalGuides };
