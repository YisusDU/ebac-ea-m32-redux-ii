import React, { useState } from "react";
import {
  GuideListContainer,
  GuideFilter,
  GuideTable,
  TableHeader,
  TableData,
  TableButtonsContainer,
} from "./styles";
import useDraggTable from "../../hooks/useDraggTable";
import { useAppSelector, useAppDispatch } from "../../hooks/useStoreTypes";
import { changeModalData } from "../../state/guides.slice";

const GuideList = () => {
  //Variables to aply some filter
  const [filter, setFilter] = useState<string>("");

  //Function to dragg the table on scroll, it needs styles of overflow
  const tableRef = useDraggTable();

  //Redux state
  const guides = useAppSelector((state) => state.guides.guides);
  const dispatch = useAppDispatch();

  type ModalType = "History" | "Update";

  const openModal = (guide: string, type: ModalType) => {
    //Redux dispatch
    dispatch(changeModalData({ guideNumber: guide, typeModal: type }));
  };

  //Aply some filter
  const filteredGuides = guides.filter((g) => {
    const lastStatus = g.guide__stage[g.guide__stage.length - 1]?.guide__status;
    return filter === "" || lastStatus === filter;
  });

  return (
    /* <!--Lista de guías--> */
    <GuideListContainer className="guide__list" id="guide__list">
      <h2 className="list__title">Lista de guías</h2>
      <GuideFilter action="#" onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="filterState">Filtrar por estado de envío:</label>
        <select
          name="filterState"
          id="filterState"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="">Mostrar todos</option>
          <option value="Pendiente">Pendientes</option>
          <option value="En tránsito">En tránsito</option>
          <option value="Entregado">Entregados</option>
        </select>
        <button type="button" onClick={() => setFilter("")}>
          Limpiar filtro
        </button>
      </GuideFilter>
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
            {filteredGuides.map((g) => (
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
