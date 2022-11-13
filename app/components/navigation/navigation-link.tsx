import { NavLink, useLocation } from "@remix-run/react";
import classNames from "classnames";
import { FunctionComponent, ReactNode, useMemo } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  Icon: FunctionComponent<{ className?: string }>;
  path: string;
};

export const NavigationLink = ({ children, className, Icon, path }: Props) => {
  const { pathname } = useLocation();

  const isCurrentRoute = useMemo(() => pathname === path, [pathname, path]);

  return (
    <NavLink
      to={path}
      className={classNames("relative flex flex-col items-center gap-1 lg:flex-row", className)}
    >
      <Icon className="h-6" />

      <span
        className={classNames({
          "after:content[' '] after:absolute after:-right-6 after:top-0 after:block after:h-full after:w-[4px] after:bg-yellow-500":
            isCurrentRoute,
        })}
      >
        {children}
      </span>
    </NavLink>
  );
};
