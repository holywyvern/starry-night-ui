import React, { Component } from "react";

import {
  Form,
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
          <Navigation vertical>
            <NavigationGroup title="Components">
              <NavigationItem>Link 1</NavigationItem>
            </NavigationGroup>
          </Navigation>
          <Separator />
          <Panel vertical grow>
            <TabContainer onClose={console.log} grow shrink>
              <TabItem title="Tab 1" allowScroll>
                Tab 1
                <ButtonGroup vertical>
                  <Button>This</Button>
                  <Button>Is</Button>
                  <Button disabled>A</Button>
                  <Button>Vertical</Button>
                  <Button>Group</Button>
                </ButtonGroup>
              </TabItem>
              <TabItem title="Tab 2" allowScroll>
                <Form onSubmit={e => e.preventDefault()}>
                  <FormLabel>Text:</FormLabel>
                  <FormTextInput />
                  <FormLabel>Disabled:</FormLabel>
                  <FormTextInput disabled defaultValue="Disabled Text" />
                  <FormLabel>Password:</FormLabel>
                  <FormPasswordInput />
                  <FormLabel>Email:</FormLabel>
                  <FormTextInput type="email" />
                  <FormLabel>Number:</FormLabel>
                  <FormNumberInput />
                  <FormLabel>Range:</FormLabel>
                  <FormNumberInput type="range" min={10} max={100} />
                  <FormNumberInput type="range" min={10} max={100} disabled />
                  <FormSelectInput
                    options={[
                      { value: "1", label: "Item 1" },
                      { value: "2", label: "Item 2" }
                    ]}
                  />
                  <FormLabel>Checkbox:</FormLabel>
                  <FormCheckbox onChange={() => {}} checked={false}>
                    I'm not Selected
                  </FormCheckbox>
                  <FormCheckbox checked onChange={() => {}}>
                    But I am
                  </FormCheckbox>
                  <FormLabel>Disabled checkbox:</FormLabel>
                  <FormCheckbox onChange={() => {}} disabled>
                    But I'm disabled
                  </FormCheckbox>
                  <FormCheckbox checked onChange={() => {}} disabled>
                    And I'm disabled too
                  </FormCheckbox>
                </Form>
              </TabItem>
              <TabItem title="Tab 3">Tab 3</TabItem>
              <TabItem title="Tab 4">Tab 4</TabItem>
              <TabItem title="Tab 5" disabled>
                Tab 5
              </TabItem>
            </TabContainer>
            <HorizontalLayout justify="end" padding="0 10px 10px 0">
              <ButtonGroup>
                <Button>This</Button>
                <Button>Is</Button>
                <Button disabled>A</Button>
                <Button>Group</Button>
              </ButtonGroup>
              <Button>Accept</Button>
              <Button>Cancel</Button>
              <Button disabled>Disabled</Button>
              <Button onClick={this.toggleModal}>Open Modal</Button>
            </HorizontalLayout>
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
