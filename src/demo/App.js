import React, { Component } from "react";

import { Container, Panel, Separator } from "../lib";

import AppNavigation from "./components/AppNavigation";
import Sidebar from "./components/Sidebar";
import LayoutDemo from "./components/LayoutDemo";
import FormDemo from "./components/FormDemo";
import PanelDemo from "./components/PanelDemo";
import ButtonDemo from "./components/ButtonDemo";
import ModalDemo from "./components/ModalDemo";

class App extends Component {
  render() {
    return (
      <Container vertical>
        <AppNavigation />
        <Panel grow>
          <Sidebar />
          <Panel vertical grow allowScroll padding="10px">
            <LayoutDemo />
            <Separator />
            <PanelDemo />
            <Separator />
            <FormDemo />
            <Separator />
            <ButtonDemo />
            <Separator />
            <ModalDemo />
          </Panel>
        </Panel>
      </Container>
    );
  }
}

export default App;
