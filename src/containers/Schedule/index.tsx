import React from "react";
import ShakerTable from "../../components/ShakerTable";
import { ScheduleContainer, TableContainer, Title } from "./style";

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

const schedule = [
  {
    date: "9/5",
    time: "4:15pm",
    game: "Shaker vs. Bethlehem",
    result: ""
  },
  {
    date: "9/7",
    time: "11:00am",
    game: "Shaker vs. Colonie",
    result: ""
  },
  {
    date: "9/10",
    time: "4:15pm",
    game: "Shaker vs. Shenendehowa",
    result: ""
  },
  {
    date: "9/12",
    time: "4:15pm",
    game: "Saratoga vs. Shaker",
    result: ""
  },
  {
    date: "9/17",
    time: "4:15pm",
    game: "Ballston Spa vs. Shaker",
    result: ""
  },
  {
    date: "9/19",
    time: "4:15pm",
    game: "Shaker vs. Niskayuna",
    result: ""
  },
  {
    date: "9/21",
    time: "11:00am",
    game: "Troy vs. Shaker",
    result: ""
  },
  {
    date: "9/24",
    time: "6:30pm",
    game: "Albany vs. Shaker",
    result: ""
  },
  {
    date: "9/26",
    time: "7:00pm",
    game: "Shaker vs. Guilderland",
    result: ""
  },
  {
    date: "9/5",
    time: "4:15pm",
    game: "Shaker vs. Bethlehem",
    result: ""
  },
  {
    date: "10/3",
    time: "4:15pm",
    game: "Shaker vs. Schenectady",
    result: ""
  },
  {
    date: "10/7",
    time: "4:15pm",
    game: "Burnt Hills vs. Shaker",
    result: ""
  },
  {
    date: "10/10",
    time: "7:00pm",
    game: "Shaker vs. CBA",
    result: ""
  },
  {
    date: "10/15",
    time: "4:15pm",
    game: "Averill Park vs. Shaker",
    result: ""
  },
  {
    date: "10/17",
    time: "7:00pm",
    game: "Columbia vs. Shaker",
    result: ""
  }
];

const Schedule: React.FC = () => {
  return (
    <ScheduleContainer>
      <Title>2019 Varsity Schedule</Title>
      <TableContainer>
        <ShakerTable columns={scheduleColumns} data={schedule} />
      </TableContainer>
    </ScheduleContainer>
  );
};

export default Schedule;
