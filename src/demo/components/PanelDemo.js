import React from "react";

import { Card, HorizontalLayout, Separator } from "../../lib";

const PanelDemo = () => {
  return (
    <section>
      <h3>Cards</h3>
      <HorizontalLayout margin="15px">
        <Card align="center" justify="center">
          z=0
        </Card>
        <Card align="center" justify="center" z={1}>
          z=1
        </Card>
        <Card align="center" justify="center" z={2}>
          z=2
        </Card>
        <Card align="center" justify="center" z={3}>
          z=3
        </Card>
        <Card align="center" justify="center" z={4}>
          z=4
        </Card>
        <Card align="center" justify="center" z={5}>
          z=5
        </Card>
        <Card align="center" justify="center" z={6}>
          z=6
        </Card>
        <Card align="center" justify="center" z={7}>
          z=7
        </Card>
        <Card align="center" justify="center" z={8}>
          z=8
        </Card>
      </HorizontalLayout>

      <h4>Light variants</h4>
      <HorizontalLayout margin="15px">
        <Card light align="center" justify="center">
          z=0
        </Card>
        <Card light align="center" justify="center" z={1}>
          z=1
        </Card>
        <Card light align="center" justify="center" z={2}>
          z=2
        </Card>
        <Card light align="center" justify="center" z={3}>
          z=3
        </Card>
        <Card light align="center" justify="center" z={4}>
          z=4
        </Card>
        <Card light align="center" justify="center" z={5}>
          z=5
        </Card>
        <Card light align="center" justify="center" z={6}>
          z=6
        </Card>
        <Card light align="center" justify="center" z={7}>
          z=7
        </Card>
        <Card light align="center" justify="center" z={8}>
          z=8
        </Card>
      </HorizontalLayout>
    </section>
  );
};

export default PanelDemo;
