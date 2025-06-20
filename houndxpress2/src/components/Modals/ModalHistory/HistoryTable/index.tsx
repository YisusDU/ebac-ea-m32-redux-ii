import React from "react";
import useDraggTable from "../../../../hooks/useDraggTable";
import { HistoryTableContainer } from "./styles";
import { useAppSelector } from "../../../../hooks/useStoreTypes";

const HistoryTable = () => {
  //Redux state
  const guides = useAppSelector((state) => state.guides.guides);
  const guideNumber = useAppSelector(
    (state) => state.guides.modalData.guideNumber
  );
  const currentGuide = guides.find((g) => g.guide__number === guideNumber);
  //Function to dragg the table on scroll, it needs styles of overflow
  const tableRef = useDraggTable();

  return (
    <HistoryTableContainer ref={tableRef}>
      <table className="tableHistory__currentGuide">
        <thead className="tableHistory__currentGuide--header">
          <tr className="tableHistory__modalUptade--row">
            <th className="tableHistory__table--modal">Número de guía</th>
            <th className="tableHistory__table--modal">Estado actual</th>
            <th className="tableHistory__table--modal">Origen</th>
            <th className="tableHistory__table--modal">Destino</th>
            <th className="tableHistory__table--modal">Destinatario</th>
          </tr>
        </thead>
        <tbody className="tableHistory__currentGuide--body">
          {currentGuide ? (
            <tr>
              <td>{currentGuide.guide__number}</td>
              <td>
                {
                  currentGuide.guide__stage[
                    currentGuide.guide__stage.length - 1
                  ]?.guide__status
                }
              </td>
              <td>{currentGuide.guide__origin}</td>
              <td>{currentGuide.guide__destination}</td>
              <td>{currentGuide.guide__recipient}</td>
            </tr>
          ) : (
            <tr>
              <td>No hay valores para mostrar</td>
            </tr>
          )}
        </tbody>
      </table>
    </HistoryTableContainer>
  );
};

export default HistoryTable;
