import React, { Component } from "react";
import { HorizontalLayout, Button, Modal } from "../../lib";

class ModalDemo extends Component {
  state = {
    open: false
  };

  toggleModal = () => {
    this.setState({ open: !this.state.open });
  };

  render() {
    return (
      <section>
        <h3>Modals</h3>
        <HorizontalLayout key="btns" justify="center">
          <Button onClick={this.toggleModal}>Open Modal</Button>
        </HorizontalLayout>
        <Modal
          key="modal"
          title="Just a modal"
          onClose={this.toggleModal}
          open={this.state.open}
        >
          This is just a simple modal.
        </Modal>
      </section>
    );
  }
}
export default ModalDemo;
