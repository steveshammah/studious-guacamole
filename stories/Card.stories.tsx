import React from "react";
import { Card } from "./Card";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Component/Card",
  component: Card,
} as ComponentMeta<typeof Card>;

export const Template: ComponentStory<typeof Card> = (args) => (
  <Card {...args} />
);

export const Small = Template.bind({});
Small.args = {
  primary: true,
  content: "This is a small storybook card",
  size: "sm",
  backgroundColor: "red",
};

export const Medium = Template.bind({});
Medium.args = {
  primary: false,
  content: "This is a medium storybook card",
  size: "md",
  backgroundColor: "red",
};

export const Large = Template.bind({});
Large.args = {
  primary: false,
  content: "This is a large storybook card",
  size: "lg",
  backgroundColor: "black",
  color: "white",
};
