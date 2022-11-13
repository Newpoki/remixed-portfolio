import { NavLink } from "@remix-run/react";
import classNames from "classnames";
import { FunctionComponent, ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  Icon: FunctionComponent<{ className?: string }>;
  path: string;
};

export const NavigationLink = ({ children, className, Icon, path }: Props) => {
  return (
    <NavLink
      to={path}
      className={classNames("flex flex-col items-center gap-1 lg:flex-row", className)}
    >
      <Icon className="h-6" />
      <span>{children}</span>
    </NavLink>
  );
};
