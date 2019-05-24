import React from "react";
import ShakerTable from "../../components/ShakerTable";
import { NoData, RosterContainer, TableContainer, Title } from "./style";

const rosterColumns = [
  {
    attrs: "number",
    title: "Number"
  },
  {
    attrs: "position",
    title: "Position"
  },
  {
    attrs: "name",
    title: "Name"
  },
  {
    attrs: "year",
    title: "Year"
  }
];

const Roster: React.FC = () => {
  return (
    <RosterContainer>
      <Title>2019 Varsity Roster</Title>
      <TableContainer>
        <ShakerTable columns={rosterColumns} data={[]} />
      </TableContainer>
      <NoData>Roster has not been released</NoData>
    </RosterContainer>
  );
};

export default Roster;
