import React, { useRef, useEffect, SetStateAction, Children } from "react";
import {
  GuideListContainer,
  GuideTable,
  TableHeader,
  TableData,
  TableButtonsContainer,
} from "./styles";
import useDraggTable from "../../hooks/useDraggTable";

//Types of the props
interface Guide {
  guide__number: string;
  guide__origin: string;
  guide__destination: string;
  guide__recipient: string;
  guide__stage: GuideStage[];
}

interface GuideStage {
  guide__date: string;
  guide__status: string;
  guide__hour: string;
}

interface GuideListProps {
  guides: Guide[];
  setModalData: React.Dispatch<SetStateAction<string>>;
  setIsOpenModal: React.Dispatch<SetStateAction<"Update" | "History" | "">>;
}

const GuideList = ({
  guides,
  setIsOpenModal,
  setModalData,
}: GuideListProps) => {
  //Function to dragg the table on scroll, it needs styles of overflow
  const tableRef = useDraggTable();

  type ModalType = "History" | "Update";

  const openModal = (guide: string, type: ModalType) => {
    setModalData(guide);
    setIsOpenModal(type);
  };

  return (
    /* <!--Lista de guías--> */
    <GuideListContainer className="guide__list" id="guide__list">
      <h2 className="list__title">Lista de guías</h2>
      <section ref={tableRef} className="list__tableContainer">
        <GuideTable className="guide__table" cellPadding={5}>
          <TableHeader className="table__header">
            <tr className="table__header--row">
              <th className="guide__table--header">Número de guía</th>
              <th className="guide__table--header">Estado actual</th>
              <th className="guide__table--header">Origen</th>
              <th className="guide__table--header">Destino</th>
              <th className="guide__table--header">Destinatario</th>
              <th className="guide__table--header">
                Fecha de la última actualización.
              </th>
              <th className="guide__table--header">Opciones</th>
            </tr>
          </TableHeader>
          <tbody className="table__body">
            {guides.map((g) => (
              <tr className="guide__table--row" key={g.guide__number}>
                <TableData className="guide__table--data">
                  {g.guide__number}
                </TableData>
                <TableData className="guide__table--data">
                  {g.guide__stage[g.guide__stage.length - 1].guide__status}
                </TableData>
                <TableData className="guide__table--data">
                  {g.guide__origin}
                </TableData>
                <TableData className="guide__table--data">
                  {g.guide__destination}
                </TableData>
                <TableData className="guide__table--data">
                  {g.guide__recipient}
                </TableData>
                <TableData className="guide__table--data">
                  {g.guide__stage[g.guide__stage.length - 1].guide__date}
                </TableData>
                <TableButtonsContainer className="guide__table--data list__buttonsContainer">
                  <button
                    className="guide__button guideButton--seeHistory"
                    onClick={() => openModal(g.guide__number, "History")}
                  >
                    Ver Historial
                  </button>
                  <button
                    className="guide__button guide__button--updateState"
                    onClick={() => openModal(g.guide__number, "Update")}
                    type="button"
                  >
                    Actualizar Estado
                  </button>
                </TableButtonsContainer>
              </tr>
            ))}
          </tbody>
        </GuideTable>
      </section>
    </GuideListContainer>
  );
};

export default GuideList;
