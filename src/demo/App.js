import React from "react";

import {
  Container,
  Navigation,
  Panel,
  NavigationGroup,
  NavigationItem,
  Separator
} from "../lib";

const App = () => (
  <Container>
    <Navigation vertical>
      <NavigationGroup title="Components">
        <NavigationItem>Link 1</NavigationItem>
      </NavigationGroup>
    </Navigation>
    <Separator />
    <Panel vertical grow />
  </Container>
);

export default App;
