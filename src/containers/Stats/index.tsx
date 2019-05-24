import React from "react";
import ShakerTable from "../../components/ShakerTable";
import { NoData, StatsContainer, TableContainer, Title } from "./style";

const statsColumns = [
  {
    attrs: "name",
    title: "Name"
  },
  {
    attrs: "gp",
    title: "GP"
  },
  {
    attrs: "gs",
    title: "GS"
  },
  {
    attrs: "g",
    title: "G"
  },
  {
    attrs: "a",
    title: "A"
  },
  {
    attrs: "pts",
    title: "PTS"
  },
  {
    attrs: "sh",
    title: "SH"
  },
  {
    attrs: "sog",
    title: "SOG"
  },
  {
    attrs: "ga",
    title: "GA"
  },
  {
    attrs: "sv",
    title: "SV"
  }
];

const Stats: React.FC = () => {
  return (
    <StatsContainer>
      <Title>2019 Varsity Statistics</Title>
      <TableContainer>
        <ShakerTable columns={statsColumns} data={[]} />
      </TableContainer>
      <NoData>Stats have not been released</NoData>
    </StatsContainer>
  );
};

export default Stats;
