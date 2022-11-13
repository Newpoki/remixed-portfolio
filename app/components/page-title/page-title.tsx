import classNames from "classnames";
import { ReactNode } from "react";

type Props = {
  className?: string;
  children: ReactNode;
  component?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
} & React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>;

export const PageTitle = ({ className, component: Component = "h1", ...others }: Props) => {
  return (
    <Component
      className={classNames(className, "text-center font-playfair text-3xl text-white")}
      {...others}
    />
  );
};
