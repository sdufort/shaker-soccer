import React from "react";
import styled from "styled-components";

export const ScheduleContainer = styled(props => <div {...props} />)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: -webkit-fill-available;
  height: fit-content;
  margin: 50px;
`;

export const TableContainer = styled(props => <div {...props} />)`
  width: 100%;
  overflow-x: scroll;
`;

export const Title = styled(props => <div {...props} />)`
  display: flex;
  color: #ffffff;
  font-size: 3vw;
  margin-bottom: 20px;
`;
