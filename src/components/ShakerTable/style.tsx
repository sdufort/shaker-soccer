import React from "react";
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell
} from "@material-ui/core";
import styled from "styled-components";

export const StyledTable = styled(props => <Table {...props} />)`
  display: flex;
  width: 100%;
  background: #ffffff !important;
  color: #000000 !important;
`;
export const StyledTableHead = styled(props => <TableHead {...props} />)`
  display: flex;
  color: #000000 !important;
`;
export const StyledTableBody = styled(props => <TableBody {...props} />)`
  display: flex;
  color: #000000 !important;
`;
export const StyledTableRow = styled(props => <TableRow {...props} />)`
  display: flex;
  color: #000000 !important;
`;
export const StyledTableHeadCell = styled(props => <TableCell {...props} />)`
  display: flex;
  color: #000000 !important;
  border-bottom: 2px solid #003594 !important;
`;
export const StyledTableBodyCell = styled(props => <TableCell {...props} />)`
  display: flex;
  color: #000000 !important;
`;
