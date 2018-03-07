import React, { Component } from "react";

import {
  LinearLayout,
  Form,
  Grid,
  FormTextInput,
  FormNumberInput,
  FormPasswordInput,
  FormSelectInput,
  FormCheckbox,
  FormLabel,
  Container,
  HorizontalLayout,
  Navigation,
  Panel,
  NavigationGroup,
  NavigationItem,
  Separator,
  TabContainer,
  TabItem,
  Button,
  ButtonGroup,
  Modal
} from "../lib";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalOpen: false
    };
  }

  toggleModal = () => {
    const { modalOpen } = this.state;
    this.setState({ modalOpen: !modalOpen });
  };

  render() {
    const { modalOpen } = this.state;
    return (
      <Container vertical>
        <Navigation align="stretch">
          <NavigationItem grow>Starry Night Components</NavigationItem>
          <NavigationItem href="./manual">Docs</NavigationItem>
          <NavigationItem href="https://github.com/holywyvern/starry-night-ui">
            Github
          </NavigationItem>
        </Navigation>

        <Separator />
        <Panel grow>
          <Navigation vertical allowScroll>
            <NavigationGroup title="Layout Elements">
              <NavigationItem href="#container">Container</NavigationItem>
              <NavigationItem href="#linear-layout">
                LinearLayout
              </NavigationItem>
              <NavigationItem href="#horizontal-layout">
                HorizontalLayout
              </NavigationItem>
              <NavigationItem href="#vertical-layout">
                VerticalLayout
              </NavigationItem>
              <NavigationItem href="#grid">Grid</NavigationItem>
              <NavigationItem href="#tab-container">
                TabContainer
              </NavigationItem>
              <NavigationItem href="#spacer">Spacer</NavigationItem>
              <NavigationItem href="#separator">Separator</NavigationItem>
            </NavigationGroup>
            <NavigationGroup title="Group Components">
              <NavigationItem href="#navigation">Navigation</NavigationItem>
              <NavigationItem href="#navigation-group">
                NavigationGroup
              </NavigationItem>
              <NavigationItem href="#navigation-item">
                NavigationItem
              </NavigationItem>
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
              <NavigationItem href="#form-hidden">
                FormHiddenInput
              </NavigationItem>
            </NavigationGroup>
            <NavigationGroup title="Basic Components">
              <NavigationItem href="#button">Button</NavigationItem>
            </NavigationGroup>
          </Navigation>
          <Separator />
          <Panel vertical grow allowScroll padding="10px">
            <h2>Layout Elements</h2>
            <h3 id="container">Container</h3>
            <p>The container is the main part of the Application.</p>
            <p>It provides the Theme and variables for properly usage.</p>
            <p>You must wrap every component inside this one.</p>
            <h3 id="linear-layout">LinearLayout</h3>
            <p>
              A linear layout is a layout than goes in one direction (a Flexbox)
            </p>
            <h4 id="vertical-layout">VerticalLayout</h4>
            <p>
              Vertical layout is an alias for &lt;LinearLayout vertical /&gt;{" "}
            </p>
            <h4 id="horizontal-layout">HorizontalLayout</h4>
            <p>
              Vertical layout is an alias for &lt;LinearLayout vertical={"{"}false}
              /&gt;{" "}
            </p>
            <h3 id="tab-container">TabContainer</h3>
            <p>A tab container is a set of tabs to manage views</p>
            <h4>Example:</h4>
            <div
              style={{
                maxHeight: "200px",
                minHeight: "200px",
                display: "flex"
              }}
            >
              <TabContainer>
                <TabItem title="Tab 1">Tab 1 Contents</TabItem>
                <TabItem title="Tab 2">Tab 2 Contents</TabItem>
                <TabItem title="Tab 3" disabled />
              </TabContainer>
            </div>
            <h3 id="spacer">Spacer</h3>
            <p>
              An Spacer is an item than takes all available space between two
              linear layout items.
            </p>
            <h3 id="separator">Separator</h3>
            <p>
              A separator is an horizontal/vertical lines separating contents.
            </p>
            <p>
              Between the left navigation and top navigation there is a
              separator.
              <h4>Examples:</h4>
              <LinearLayout>
                <LinearLayout
                  vertical
                  style={{ maxWidth: "150px" }}
                  margin="20px"
                >
                  <div>Here is an item</div>
                  <Separator />
                  <div>Here is another item</div>
                </LinearLayout>
                <LinearLayout style={{ maxWidth: "150px" }} margin="20px">
                  <div>Here is an item</div>
                  <Separator />
                  <div>Here is another item</div>
                </LinearLayout>
              </LinearLayout>
            </p>
            <h3>Form:</h3>
            <Form onSubmit={e => e.preventDefault()}>
              <Grid
                style={{ maxWidth: "400px", margin: "auto" }}
                template={{ columns: ["auto", "1fr", "auto", "1fr"] }}
                alignItems="center"
                gap="10px"
              >
                <FormLabel>Text:</FormLabel>
                <FormTextInput />
                <FormLabel>Password:</FormLabel>
                <FormPasswordInput />
                <FormLabel>Number:</FormLabel>
                <FormNumberInput />
                <FormLabel>Range:</FormLabel>
                <FormNumberInput type="range" />
              </Grid>
            </Form>
          </Panel>
        </Panel>
        <Modal
          open={modalOpen}
          onClose={this.toggleModal}
          title="Hi, I'm a Modal"
        >
          Close me PLZ!
        </Modal>
      </Container>
    );
  }
}

export default App;
