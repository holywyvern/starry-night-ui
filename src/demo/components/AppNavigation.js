import React from "react";

import { Navigation, NavigationItem } from "../../lib";

const AppNavigation = () => {
  return (
    <Navigation align="stretch">
      <NavigationItem grow>Starry Night Components</NavigationItem>
      <NavigationItem href="./manual">Docs</NavigationItem>
      <NavigationItem href="https://github.com/holywyvern/starry-night-ui">
        Github
      </NavigationItem>
    </Navigation>
  );
};

export default AppNavigation;
