import React from "react";
import ShakerTable from "../../components/ShakerTable";
import { summerData } from "./summerData";
import { NoData, SummerContainer, TableContainer, Title } from "./style";

const summerColumns = [
  {
    attrs: "date",
    title: "Date"
  },
  {
    attrs: "time",
    title: "Time"
  },
  {
    attrs: "session",
    title: "Session"
  },
  {
    attrs: "location",
    title: "Location"
  }
];

const Summer: React.FC = () => {
  return (
    <SummerContainer>
      <Title>2019 Summer Schedule</Title>
      <TableContainer>
        <ShakerTable columns={summerColumns} data={summerData} />
      </TableContainer>
      {summerData.length === 0 && <NoData>Stats have not been released</NoData>}
    </SummerContainer>
  );
};

export default Summer;
