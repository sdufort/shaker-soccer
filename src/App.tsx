import React from "react";
import { Link, Switch, Route, Redirect } from "react-router-dom";
import { Tab, Tabs } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";
import Home from "./containers/Home";
import Roster from "./containers/Roster";
import Schedule from "./containers/Schedule";
import { theme } from "./theme/mui-theme";
import bison from "./bison.png";
import logo from "./logo.svg";
import {
  Content,
  Header,
  Image,
  LeftTabs,
  NavBar,
  RightTabs,
  TabContainer
} from "./AppStyle";
import "./App.css";

const App: React.FC = () => {
  const [value, setValue] = React.useState("home");

  function handleChange(event: any, newValue: string) {
    setValue(newValue);
  }

  return (
    <ThemeProvider theme={theme}>
      <main>
        <Header>#FearTheBison</Header>
        <NavBar position="static">
          <TabContainer>
            <LeftTabs>
              <Tabs
                indicatorColor="primary"
                value={value}
                onChange={handleChange}
              >
                <Tab value="home" label="Home" component={Link} to="/home" />
                <Tab
                  value="schedule"
                  label="Schedule"
                  component={Link}
                  to="/schedule"
                />
                <Tab
                  value="roster"
                  label="Roster"
                  component={Link}
                  to="/roster"
                />
              </Tabs>
            </LeftTabs>
            <Image src={bison} alt="bison" />
            <RightTabs>
              <Tabs
                indicatorColor="primary"
                value={value}
                onChange={handleChange}
              >
                <Tab value="stats" label="Stats" component={Link} to="/stats" />
                <Tab
                  value="tryouts"
                  label="Tryouts"
                  component={Link}
                  to="/tryouts"
                />
                <Tab
                  value="program"
                  label="Program"
                  component={Link}
                  to="/program"
                />
              </Tabs>
            </RightTabs>
          </TabContainer>
        </NavBar>
        <Content>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/schedule" component={Schedule} />
            <Route exact path="/roster" component={Roster} />
            <Route exact path="/stats" component={Home} />
            <Route exact path="/tryouts" component={Home} />
            <Route exact path="/program" component={Home} />
            <Redirect to="/" />
          </Switch>
        </Content>
      </main>
    </ThemeProvider>
  );
};

export default App;
