import { Guide } from "../types/guides";

export interface GuidesState {
  guides: Guide[];
  menuDisplay: boolean;
  modalData: InfoModalData;
}

export interface InfoModalData {
  guideNumber: string | "";
  typeModal: "History" | "Update" | "";
}
