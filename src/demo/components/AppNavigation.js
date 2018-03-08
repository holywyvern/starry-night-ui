import React from "react";

import { Navigation, NavigationItem, VerticalLayout } from "../../lib";

const AppNavigation = () => {
  return (
    <VerticalLayout z={3}>
      <Navigation align="stretch">
        <NavigationItem grow>Starry Night Components</NavigationItem>
        <NavigationItem href="./manual">Docs</NavigationItem>
        <NavigationItem href="https://github.com/holywyvern/starry-night-ui">
          Github
        </NavigationItem>
      </Navigation>
    </VerticalLayout>
  );
};

export default AppNavigation;
