import React, { Component } from "react";

import {
  VerticalLayout,
  Form,
  Grid,
  FormLabel,
  FormTextArea,
  FormTextInput,
  FormPasswordInput,
  FormNumberInput,
  FormCheckbox,
  FormSelectInput,
  FormRadio
} from "../../lib";

const FormDemo = () => {
  return (
    <section>
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
          <FormTextArea column="1 / 5" />
          <FormLabel selfAlign="start" padding={{ top: "12px" }}>
            Checkboxes:
          </FormLabel>
          <VerticalLayout>
            <FormCheckbox>Check ME!</FormCheckbox>
            <FormCheckbox onChange={() => {}} checked={false}>
              Unchecked
            </FormCheckbox>
            <FormCheckbox checked onChange={() => {}}>
              Checked
            </FormCheckbox>
            <FormCheckbox disabled onChange={() => {}}>
              Unchecked
            </FormCheckbox>
            <FormCheckbox disabled checked onChange={() => {}}>
              Checked
            </FormCheckbox>
          </VerticalLayout>
          <FormLabel selfAlign="start" padding={{ top: "12px" }}>
            Radio:
          </FormLabel>
          <VerticalLayout>
            <FormRadio defaultChecked name="radio-test">
              Option 1
            </FormRadio>
            <FormRadio name="radio-test">Option 2</FormRadio>
            <FormRadio name="x" checked onChange={() => {}}>
              Checked
            </FormRadio>
            <FormRadio name="y" disabled onChange={() => {}}>
              Unchecked
            </FormRadio>
            <FormRadio name="y" disabled checked onChange={() => {}}>
              Checked
            </FormRadio>
          </VerticalLayout>
        </Grid>
      </Form>
    </section>
  );
};

export default FormDemo;
