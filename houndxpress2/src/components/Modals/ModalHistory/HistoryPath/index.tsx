import React from "react";
import Paw from "../../../../assets/IMG/paw-solid.svg";
import {
  ModalHistoryPath,
  ModalPathContent,
  ModalSVGContainer,
} from "./styles";
import { useAppSelector } from "../../../../hooks/useStoreTypes";

const HistoryPath = () => {
  //Redux state
  const guides = useAppSelector((state) => state.guides.guides);
  const guideNumber = useAppSelector(
    (state) => state.guides.modalData.guideNumber
  );
  const currentGuide = guides.find((g) => g.guide__number === guideNumber);
  return (
    <section>
      {/* Dinamics paths of following  */}
      {currentGuide && currentGuide.guide__stage?.length >= 1 ? (
        <>
          {currentGuide?.guide__stage.map((stage, idx) => (
            <ModalHistoryPath key={idx}>
              <ModalSVGContainer>
                <img src={Paw} alt="paw-icon" />
              </ModalSVGContainer>
              <ModalPathContent>
                <h3
                  className={
                    stage.guide__status === "Pendiente"
                      ? "status--pending"
                      : stage.guide__status === "En tránsito"
                      ? "status--transit"
                      : stage.guide__status === "Entregado"
                      ? "status--delivered"
                      : ""
                  }
                >
                  {stage.guide__status}
                </h3>
                <div>
                  <span>{`${stage.guide__date} , ${stage.guide__hour} | `}</span>
                  <span>
                    {stage.guide__status === "Pendiente" &&
                      "Tu envío está en preparación"}
                    {stage.guide__status === "En tránsito" &&
                      "Tu envío está en camino"}
                    {stage.guide__status === "Entregado" &&
                      "¡Tu envío fue entregado!"}
                  </span>
                </div>
                <hr />
              </ModalPathContent>
            </ModalHistoryPath>
          ))}
        </>
      ) : (
        <p>No hay valores para mostrar</p>
      )}
    </section>
  );
};

export default HistoryPath;
