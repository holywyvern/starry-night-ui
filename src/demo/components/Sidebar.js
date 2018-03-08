import React from "react";

import { Navigation, NavigationItem, NavigationGroup } from "../../lib";

const Sidebar = () => {
  return (
    <Navigation vertical allowScroll z={2}>
      <NavigationGroup title="Layout Elements">
        <NavigationItem href="#container">Container</NavigationItem>
        <NavigationItem href="#linear-layout">LinearLayout</NavigationItem>
        <NavigationItem href="#horizontal-layout">
          HorizontalLayout
        </NavigationItem>
        <NavigationItem href="#vertical-layout">VerticalLayout</NavigationItem>
        <NavigationItem href="#grid">Grid</NavigationItem>
        <NavigationItem href="#tab-container">TabContainer</NavigationItem>
        <NavigationItem href="#spacer">Spacer</NavigationItem>
        <NavigationItem href="#separator">Separator</NavigationItem>
      </NavigationGroup>
      <NavigationGroup title="Group Components">
        <NavigationItem href="#navigation">Navigation</NavigationItem>
        <NavigationItem href="#navigation-group">
          NavigationGroup
        </NavigationItem>
        <NavigationItem href="#navigation-item">NavigationItem</NavigationItem>
        <NavigationItem href="#button-group">ButtonGroup</NavigationItem>
      </NavigationGroup>
      <NavigationGroup title="Form Components">
        <NavigationItem href="#form">Form</NavigationItem>
        <NavigationItem href="#form">FormLabel</NavigationItem>
        <NavigationItem href="#form">FormTextInput</NavigationItem>
        <NavigationItem href="#form">FormPasswordInput</NavigationItem>
        <NavigationItem href="#form">FormNumberInput</NavigationItem>
        <NavigationItem href="#form">FormTextArea</NavigationItem>
        <NavigationItem href="#form">FormCheckbox</NavigationItem>
        <NavigationItem href="#form">FormSelectInput</NavigationItem>
        <NavigationItem href="#form-date">FormDateInput</NavigationItem>
        <NavigationItem href="#form-hidden">FormHiddenInput</NavigationItem>
      </NavigationGroup>
      <NavigationGroup title="Basic Components">
        <NavigationItem href="#button">Button</NavigationItem>
      </NavigationGroup>
    </Navigation>
  );
};

export default Sidebar;
