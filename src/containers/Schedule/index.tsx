import React from "react";
import ShakerTable from "../../components/ShakerTable";
import { ScheduleContainer } from "./style";

const scheduleColumns = [
  {
    attrs: "date",
    title: "Date"
  },
  {
    attrs: "time",
    title: "Time"
  },
  {
    attrs: "game",
    title: "Game"
  },
  {
    attrs: "result",
    title: "Result"
  }
];

const Schedule: React.FC = () => {
  return (
    <ScheduleContainer>
      <ShakerTable columns={scheduleColumns} data={[]} />
    </ScheduleContainer>
  );
};

export default Schedule;
