import React, { useState, useEffect } from "react";
import Gift from "../../assets/IMG/Animacion-beneficios-sistema-v2.gif";
import { Guide } from "../../types/guides";
import {
  GeneralStateContainer,
  StateContainer,
  StateElement,
  StateGroup,
  StatePicture,
} from "./styles";
import { useAppSelector } from "../../hooks/useStoreTypes";

const GeneralState = () => {
  //Local state
  const [guideActive, setGuideActive] = useState<number>(0);
  const [guideDelivered, setGuideDelivered] = useState<number>(0);
  const [guidePending, setGuidePending] = useState<number>(0);
  const [guideTransit, setGuideTransit] = useState<number>(0);

  //Redux state
  const guides = useAppSelector((state) => state.guides.guides);

  //AutoUpdate the general numbers
  useEffect(() => {
    const active = guides.filter(
      (e) => !e.guide__stage.some((e) => e.guide__status === "Entregado")
    ).length;
    const delivered = guides.filter((e) =>
      e.guide__stage.some((e) => e.guide__status === "Entregado")
    ).length;
    const pending = guides.filter(
      (guide) =>
        guide.guide__stage.some(
          (stage) => stage.guide__status === "Pendiente"
        ) &&
        !guide.guide__stage.some(
          (stage) => stage.guide__status === "En tránsito"
        )
    ).length;
    const transit = guides.length - delivered - pending;

    // Ahora sí, los logs mostrarán los valores correctos
    /* console.log("guías activas", active);
    console.log("guías entregadas", delivered);
    console.log("guías pendientes", pending);
    console.log("guías en tránsito", transit); */

    setGuideActive(active);
    setGuideDelivered(delivered);
    setGuidePending(pending);
    setGuideTransit(transit);
  }, [guides]);

  return (
    /* <!--Panel de estado general--> */
    <GeneralStateContainer id="general__state" className="state">
      <StateContainer className="state__container">
        <h2 className="state__title">Estado general</h2>
        <hr />
        <StateElement className="state__element">
          <StateGroup className="state__group">
            <h2 className="state__subject">Número total de guías activas</h2>
            <p className="state__info totalGuidesActive">{guideActive}</p>
          </StateGroup>
          <StateGroup className="state__group">
            <h2 className="state__subject">Guías en tránsito</h2>
            <p className="state__info onTransitGuides">{guideTransit}</p>
          </StateGroup>
          <StateGroup className="state__group">
            <h2 className="state__subject">Guías entregadas</h2>
            <p className="state__info deliveredGuides">{guideDelivered}</p>
          </StateGroup>
        </StateElement>
      </StateContainer>
      <StatePicture className="state__picture">
        <img className="state__img" src={Gift} alt="hx__gift" />
      </StatePicture>
    </GeneralStateContainer>
  );
};

export default GeneralState;
