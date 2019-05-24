import React from "react";
import ShakerTable from "../../components/ShakerTable";
import { RosterContainer } from "./style";

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
      <ShakerTable columns={rosterColumns} data={[]} />
    </RosterContainer>
  );
};

export default Roster;
