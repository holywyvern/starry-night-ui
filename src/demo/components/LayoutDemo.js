import React from "react";

import { TabContainer, TabItem, LinearLayout, Separator } from "../../lib";

const LayoutDemo = () => {
  return (
    <section>
      <h2>Layout Elements</h2>
      <h3 id="container">Container</h3>
      <p>The container is the main part of the Application.</p>
      <p>It provides the Theme and variables for properly usage.</p>
      <p>You must wrap every component inside this one.</p>
      <h3 id="linear-layout">LinearLayout</h3>
      <p>A linear layout is a layout than goes in one direction (a Flexbox)</p>
      <h4 id="vertical-layout">VerticalLayout</h4>
      <p>Vertical layout is an alias for &lt;LinearLayout vertical /&gt; </p>
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
        An Spacer is an item than takes all available space between two linear
        layout items.
      </p>
      <h3 id="separator">Separator</h3>
      <p>A separator is an horizontal/vertical lines separating contents.</p>
      <p>
        Between the left navigation and top navigation there is a separator.
      </p>
      <h4>Examples:</h4>
      <LinearLayout>
        <LinearLayout vertical style={{ maxWidth: "150px" }} margin="20px">
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
    </section>
  );
};

export default LayoutDemo;
