import React from "react";

import { Separator, HorizontalLayout, Button, ButtonGroup } from "../../lib";

const ButtonDemo = () => {
  return (
    <section>
      <h3>Buttons</h3>
      <HorizontalLayout>
        <Button>Click Me </Button>
        <Button disabled>Not me</Button>
      </HorizontalLayout>
      <h3>Button groups</h3>
      <HorizontalLayout align="center" justify="space-around" margin="15px">
        <div>
          <h4>Horizontal</h4>
          <ButtonGroup>
            <Button>Button 1 </Button>
            <Button>Button 2 </Button>
            <Button>Button 3 </Button>
          </ButtonGroup>
        </div>
        <Separator />
        <div>
          <h4>Vertical</h4>
          <ButtonGroup vertical>
            <Button>Button 1 </Button>
            <Button>Button 2 </Button>
            <Button>Button 3 </Button>
          </ButtonGroup>
        </div>
      </HorizontalLayout>
    </section>
  );
};

export default ButtonDemo;
