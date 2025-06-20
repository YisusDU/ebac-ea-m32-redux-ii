import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { GuidesState, InfoModalData } from "./types";
import { Guide } from "../types/guides";
import { GuideStage } from "../components/GuideReguister/types";

//Global Initial State
const initialState: GuidesState = {
  guides: [
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
  ],
  menuDisplay: false,
  modalData: { guideNumber: "", typeModal: "" },
};

const guidesSlice = createSlice({
  name: "guidesState",
  initialState,
  reducers: {
    addGuide: (state, action: PayloadAction<Guide>) => {
      state.guides.unshift(action.payload);
    },
    updateGuide: (state, action: PayloadAction<GuideStage>) => {
      const guide = state.guides.find(
        (g) => g.guide__number == state.modalData.guideNumber
      );
      if (guide) {
        guide.guide__stage.push(action.payload);
      }
    },
    toggleMenu: (state, action: PayloadAction<boolean>) => {
      state.menuDisplay = action.payload;
    },
    changeModalData: (state, action: PayloadAction<InfoModalData>) => {
      state.modalData = action.payload;
    },
  },
});

//Actions by name
export const { addGuide, toggleMenu, changeModalData, updateGuide } =
  guidesSlice.actions;

//Reducer for the store
export default guidesSlice.reducer;
