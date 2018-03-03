import React from "react";

import {
  Container,
  HorizontalLayout,
  Navigation,
  Panel,
  NavigationGroup,
  NavigationItem,
  Separator,
  TabContainer,
  TabItem,
  Button
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
      <Navigation justify="end">
        <NavigationItem href="./manual">Docs</NavigationItem>
        <NavigationItem href="https://github.com/holywyvern/starry-night-ui">
          Github
        </NavigationItem>
      </Navigation>
      <Separator />
      <TabContainer onClose={console.log}>
        <TabItem title="Tab 1">Tab 1</TabItem>
        <TabItem title="Tab 2">Tab 2</TabItem>
        <TabItem title="Tab 3">Tab 3</TabItem>
        <TabItem title="Tab 4">Tab 4</TabItem>
        <TabItem title="Tab 5" disabled>
          Tab 5
        </TabItem>
      </TabContainer>
      <HorizontalLayout justify="end" padding="0 10px 10px 0">
        <Button>Accept</Button>
        <Button>Cancel</Button>
        <Button disabled>Disabled</Button>
      </HorizontalLayout>
    </Panel>
  </Container>
);

export default App;
