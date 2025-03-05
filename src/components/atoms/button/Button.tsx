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
      <div className="px-12">
        <div className="pending" />
      </div>
    );
  } else if (success && hasSuccess) {
    return (
      <div className={classNames({ "flex items-center": true, "flex-row-reverse": iconPosition === "right" })}>
        {success.icon}
        <span className="px-3">{success.label}</span>
      </div>
    );
  } else {
    return (
      <div className={classNames({ "flex items-center": true, "flex-row-reverse": iconPosition === "right" })}>
        {icon}
        <span className="px-3">{label}</span>
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
      "flex items-center justify-center rounded text-sm font-medium leading-none tracking-normal disabled:cursor-not-allowed disabled:text-opacity-50":
        true,
      "w-full": fullWidth,
      "bg-betaCom text-gray-50 hover:bg-nm-900 disabled:bg-nmGray-100 disabled:text-nmGray-700 disabled:hover:bg-nmGray-100":
        variant === "primary",
      "border-nmGray-100 bg-nmGray-100 text-black hover:bg-nmGray-300 disabled:hover:bg-nmGray-100": variant === "secondary",
      "border border-solid border-nmGray-500 bg-transparent text-black hover:border-slate-500 disabled:text-nmGray-700 disabled:hover:border-nmGray-500":
        variant === "tertiary",
      "bg-transparent text-black hover:text-nmGray-700 disabled:text-nmGray-900": variant === "text",
      "rounded-[42px] border border-nmGray-300 hover:bg-nmGray-300 disabled:hover:bg-nmGray-100": variant === "backButton",
      "px-6 py-4": !isSmall,
      "p-3 text-xs": isSmall,
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
