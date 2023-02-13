import { ButtonHTMLAttributes, DetailedHTMLProps, FC, ReactNode } from "react";

const sizes = {
  lg: "py-3 px-6 text-base",
  md: "py-2 px-4 text-sm",
  sm: "py-1 px-2 text-xs",
  xs: "p-0 text-xs",
};

const variants = {
  primary: "text-white bg-black border-transparent",
  secondary: "text-black bg-transparent border-black",
  transparent:
    "border-transparent hover:bg-gray hover:bg-opacity-20 active:bg-gray active:bg-opacity-30",
};

export interface ButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  icon?: ReactNode;
  size?: keyof typeof sizes;
  variant?: keyof typeof variants;
  iconAfter?: boolean;
}

const Button: FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  className = "",
  icon,
  iconAfter,
  disabled,
  children,
  ...props
}) => {
  return (
    <button
      className={`rounded-md font-bold text-base flex items-center justify-center cursor-pointer border-2 gap-2
         ${disabled ? "cursor-not-allowed opacity-40" : ""}
         ${variants[variant]}
         ${sizes[size]}
         ${className}
        `}
        disabled={disabled}
      {...props}
    >
      {icon ? <span className={iconAfter ? "order-2" : ""}>{icon}</span> : null}
      {children}
    </button>
  );
};

export default Button;
