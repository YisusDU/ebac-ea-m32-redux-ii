import React from "react";
import { Guide } from "../../../GuideReguister/types";
import { UpdateTableContainer } from "./styles";
import useDraggTable from "../../../../hooks/useDraggTable";

export interface UpdateGuide {
  guideIndex: number;
  currentGuide: Guide;
}

const UpdateTable = ({ guideIndex, currentGuide }: UpdateGuide) => {
  //Function to dragg the table on scroll, it needs styles of overflow
  const tableRef = useDraggTable();

  return (
    <UpdateTableContainer ref={tableRef}>
        <table className="table__currentGuide">
          <thead className="table__currentGuide--header">
            <tr className="table__modalUptade--row">
              <th className="guide__table--modal">Número de guía</th>
              <th className="guide__table--modal">Estado actual</th>
              <th className="guide__table--modal">Origen</th>
              <th className="guide__table--modal">Destino</th>
              <th className="guide__table--modal">Destinatario</th>
              <th className="guide__table--modal">
                Fecha de la última actualización.
              </th>
              <th className="guide__table--modal">Hora de actualización</th>
            </tr>
          </thead>
          <tbody className="table__currentGuide--body">
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
                <td>
                  {
                    currentGuide.guide__stage[
                      currentGuide.guide__stage.length - 1
                    ]?.guide__date
                  }
                </td>
                <td>
                  {
                    currentGuide.guide__stage[
                      currentGuide.guide__stage.length - 1
                    ]?.guide__hour
                  }
                </td>
              </tr>
            ) : (
              <tr>
                <td>No hay valores para mostrar</td>
              </tr>
            )}
          </tbody>
        </table>
    </UpdateTableContainer>
  );
};

export default UpdateTable;
