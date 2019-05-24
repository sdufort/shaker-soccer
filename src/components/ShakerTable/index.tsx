import React from "react";
import {
  StyledTable,
  StyledTableHead,
  StyledTableBody,
  StyledTableRow,
  StyledTableHeadCell,
  StyledTableBodyCell
} from "./style";

interface Columns {
  attrs: string;
  title: string;
}

type Props = {
  columns: Array<Columns>;
  data: Array<Object>;
};

const ShakerTable: React.FC<Props> = (props: Props) => {
  const createColumns = () => (
    <StyledTableRow>
      {props.columns.map(column => (
        <StyledTableHeadCell key={`column-${column.attrs}`}>
          {column.title}
        </StyledTableHeadCell>
      ))}
    </StyledTableRow>
  );

  const createRows = (data: any, index: number) => (
    <StyledTableRow hover key={`row-${index}`}>
      {props.columns.map(column => (
        <StyledTableBodyCell key={`row-${index} ${column.attrs}`}>
          {data[column.attrs]}
        </StyledTableBodyCell>
      ))}
    </StyledTableRow>
  );

  return (
    <StyledTable>
      <StyledTableHead>{createColumns()}</StyledTableHead>
      <StyledTableBody>
        {props.data.map((dataRow, i) => createRows(dataRow, i))}
      </StyledTableBody>
    </StyledTable>
  );
};

export default ShakerTable;
