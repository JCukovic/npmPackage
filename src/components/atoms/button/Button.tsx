import React from "react";
import classNames from "classnames";
import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from "react";

type ButtonContentProps = {
  label: string;
  icon?: ReactNode;
  iconPosition?: "left" | "right";
  pending?: boolean;
  success?: { label: string; icon?: ReactNode };
  hasSuccess?: boolean;
};

const ButtonContent = ({ label, icon, iconPosition, success, hasSuccess, pending }: ButtonContentProps) => {
  if (pending) {
    return (
      <div className="uilib-px-12">
        <div className="uilib-pending" />
      </div>
    );
  } else if (success && hasSuccess) {
    return (
      <div
        className={classNames({
          "uilib-flex uilib-items-center": true,
          "uilib-flex-row-reverse": iconPosition === "right",
        })}>
        {success.icon}
        <span className="uilib-px-3">{success.label}</span>
      </div>
    );
  } else {
    return (
      <div
        className={classNames({
          "uilib-flex uilib-items-center": true,
          "uilib-flex-row-reverse": iconPosition === "right",
        })}>
        {icon}
        <span className="uilib-px-3">{label}</span>
      </div>
    );
  }
};

export type ButtonProps = Omit<
  DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>,
  "class" | "style"
> &
  ButtonContentProps & {
    fullWidth?: boolean;
    isSmall?: boolean;
    disabled?: boolean;
    variant?: "primary" | "secondary" | "tertiary" | "text" | "backButton";
  };

const Button = ({
  label,
  fullWidth,
  icon,
  iconPosition = "left",
  isSmall,
  variant = "primary",
  success,
  hasSuccess,
  pending,
  disabled,
  ...props
}: ButtonProps) => (
  <button
    className={classNames({
      "uilib-flex uilib-items-center uilib-justify-center uilib-rounded uilib-text-sm uilib-font-medium uilib-leading-none uilib-tracking-normal disabled:uilib-cursor-not-allowed disabled:uilib-text-opacity-50 ":
        true,
      "uilib-w-full": fullWidth,
      "uilib-bg-betaCom uilib-text-gray-50 hover:uilib-bg-nm-900 disabled:uilib-bg-nmGray-100 disabled:uilib-text-nmGray-700 disabled:hover:uilib-bg-nmGray-100":
        variant === "primary",
      "uilib-border-nmGray-100 uilib-bg-nmGray-100 uilib-text-black hover:uilib-bg-nmGray-300 disabled:hover:uilib-bg-nmGray-100":
        variant === "secondary",
      "uilib-border uilib-border-solid uilib-border-nmGray-500 uilib-bg-transparent uilib-text-black hover:uilib-border-slate-500 disabled:uilib-text-nmGray-700 disabled:hover:uilib-border-nmGray-500":
        variant === "tertiary",
      "uilib-bg-transparent uilib-text-black hover:uilib-text-nmGray-700 disabled:uilib-text-nmGray-900": variant === "text",
      "uilib-rounded-[42px] uilib-border uilib-border-nmGray-300 hover:uilib-bg-nmGray-300 disabled:hover:uilib-bg-nmGray-100":
        variant === "backButton",
      "uilib-px-6 uilib-py-4": !isSmall,
      "uilib-p-3 uilib-text-xs": isSmall,
    })}
    // eslint-disable-next-line @typescript-eslint/prefer-nullish-coalescing
    disabled={disabled || pending}
    {...props}>
    <ButtonContent
      label={label}
      icon={icon}
      iconPosition={iconPosition}
      pending={pending}
      success={success}
      hasSuccess={hasSuccess}
    />
  </button>
);

export default Button;
