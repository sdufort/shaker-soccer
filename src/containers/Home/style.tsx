import React from "react";
import { AppBar } from "@material-ui/core";
import styled from "styled-components";

export const Image = styled(props => <img {...props} />)`
  display: flex;
  position: relative;
  margin-top: -25px;
  width: 100px;
  height: 100px;
  z-index: 10;
`;

export const LeftTabs = styled(props => <div {...props} />)`
  display: flex;
  justify-content: flex-start;
  width: 50%;
`;

export const NavBar = styled(props => <AppBar {...props} />)`
  background: #003594 !important;
  height: 48px !important;
  overflow: visible;
`;

export const RightTabs = styled(props => <div {...props} />)`
  display: flex;
  justify-content: flex-end;
  width: 50%;
`;

export const TabContainer = styled(props => <div {...props} />)`
  display: flex;
  width: 100%;
  color: #ffffff !important;
`;
