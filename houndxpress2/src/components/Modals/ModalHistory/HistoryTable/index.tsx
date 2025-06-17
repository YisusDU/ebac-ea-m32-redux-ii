import React from "react";
import { Guide } from "../../../GuideReguister/types";
import useDraggTable from "../../../../hooks/useDraggTable";
import { HistoryTableContainer } from "./styles";

export interface HistoryGuide {
  guideIndex: number;
  currentGuide: Guide;
}

const HistoryTable = ({ guideIndex, currentGuide }: HistoryGuide) => {
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
          {guideIndex !== -1 && currentGuide ? (
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
