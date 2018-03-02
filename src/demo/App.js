import React from "react";

import {
  Container,
  Navigation,
  Panel,
  NavigationGroup,
  NavigationItem,
  Separator,
  TabContainer,
  TabItem
} from "../lib";

const App = () => (
  <Container>
    <Navigation vertical>
      <NavigationGroup title="Components">
        <NavigationItem>Link 1</NavigationItem>
      </NavigationGroup>
    </Navigation>
    <Separator />
    <Panel vertical grow>
      <TabContainer>
        <TabItem title="Tab 1">Tab 1</TabItem>
        <TabItem title="Tab 2">Tab 2</TabItem>
        <TabItem title="Tab 3">Tab 3</TabItem>
        <TabItem title="Tab 4">Tab 4</TabItem>
        <TabItem title="Tab 5" disabled>
          Tab 5
        </TabItem>
      </TabContainer>
    </Panel>
  </Container>
);

export default App;
