import React from "react";
import {
  ExpansionPanel,
  ExpansionPanelDetails,
  ExpansionPanelSummary,
  Typography
} from "@material-ui/core";
import styled from "styled-components";

export const ContentContainer = styled(props => <div {...props} />)`
  display: flex;
  flex-direction: row;
  width: 90%;
  & > * {
    margin: 10px;
  }
`;

export const Session = styled(props => <div {...props} />)`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const StyledEP = styled(props => <ExpansionPanel {...props} />)`
  width: 100%;
`;

export const StyledEPDetails = styled(props => (
  <ExpansionPanelDetails {...props} />
))`
  display: flex;
  & > * {
    margin: 10px;
  }
`;

export const StyledEPSummary = styled(props => (
  <ExpansionPanelSummary {...props} />
))`
  display: flex;
`;

export const StyledTypography = styled(props => <Typography {...props} />)`
  display: flex;
  color: #003594;
  font-size: 20px !important;
  font-weight: bold !important;
`;

export const Title = styled(props => <div {...props} />)`
  display: flex;
  color: #ffffff;
  font-size: 3vw;
  margin-bottom: 20px;
`;

export const TryoutContainer = styled(props => <div {...props} />)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: fit-content;
  margin: 50px;
`;

export const TryoutDate = styled(props => <div {...props} />)`
  display: flex;
  flex-direction: column;
  padding: 16px 40px 15px 16px;
  font-size: 16px;
  font-weight: bold;
  border-bottom: 3px solid #003594;
`;

export const TryoutDay = styled(props => <div {...props} />)`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

export const TryoutSchedule = styled(props => <div {...props} />)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: inherit;
`;

export const TryoutSessions = styled(props => <div {...props} />)`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
`;
