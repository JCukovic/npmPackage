import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import Button from "./Button";
import Icons from "../../../icons";

const meta = {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    onClick: fn(),
    label: "Button",
  },
  argTypes: {
    label: { control: "text" },
    variant: { control: "select", options: ["primary", "secondary", "tertiary", "text", "backButton"] },
    fullWidth: { control: "boolean" },
    isSmall: { control: "boolean" },
    disabled: { control: "boolean" },
    iconPosition: { control: "select", options: ["left", "right"] },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "Button",
  },
};

export const Primary: Story = {
  args: {
    ...Default.args,
    variant: "primary",
  },
};

export const Secondary: Story = {
  args: {
    ...Default.args,
    variant: "secondary",
  },
};

export const Tertiary: Story = {
  args: {
    ...Default.args,
    variant: "tertiary",
  },
};

export const Text: Story = {
  args: {
    ...Default.args,
    variant: "text",
  },
};

export const BackButton: Story = {
  args: {
    ...Default.args,
    variant: "backButton",
  },
};

export const WithIcon: Story = {
  args: {
    ...Default.args,
    icon: Icons.Cart({ width: "20", height: "20" }),
  },
};

export const IconRight: Story = {
  args: {
    ...Default.args,
    icon: Icons.Cart({ width: "20", height: "20" }),
    iconPosition: "right",
  },
};

export const Small: Story = {
  args: {
    ...Default.args,
    isSmall: true,
  },
};

export const Disabled: Story = {
  args: {
    ...Default.args,
    disabled: true,
  },
};
