import React, { Component } from "react";

import { Container, Panel, Separator } from "../lib";

import AppNavigation from "./components/AppNavigation";
import Sidebar from "./components/Sidebar";
import LayoutDemo from "./components/LayoutDemo";
import FormDemo from "./components/FormDemo";

class App extends Component {
  render() {
    return (
      <Container vertical>
        <AppNavigation />
        <Separator />
        <Panel grow>
          <Sidebar />
          <Separator />
          <Panel vertical grow allowScroll padding="10px">
            <LayoutDemo />
            <h3>Form:</h3>
            <FormDemo />
          </Panel>
        </Panel>
      </Container>
    );
  }
}

export default App;
