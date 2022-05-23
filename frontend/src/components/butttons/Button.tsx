import React, { FC } from "react";
import { Link } from "react-router-dom";

type linkProps = { to: string | undefined; children: any };

type buttonProps = {
  className?: string;
  children?: string;
  to?: string;
  [key: string]: any;
};

const LinkWrapper: FC<linkProps> = ({ to, children }: linkProps) => {
  return to ? <Link to={to}>{children}</Link> : children;
};

const Button: FC<buttonProps> = ({
  className,
  children,
  to,
  ...rest
}: buttonProps) => {
  return (
    <LinkWrapper to={to}>
      <button
        type="button"
        className={`
        transition ease-in-out 
        border-b-2 border-transparent
        hover:border-secondary-orange
        ${className}
      `}
        {...rest}
      >
        {children}
      </button>
    </LinkWrapper>
  );
};

export default Button;
