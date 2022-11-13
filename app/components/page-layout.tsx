import { useLocation } from "@remix-run/react";
import { ReactNode } from "react";
import { YellowSplash, YellowSplashWithPicture } from "~/icons";
import { Navigation } from "./navigation/navigation";

type Props = {
  children: ReactNode;
};

export const PageLayout = ({ children }: Props) => {
  const { pathname } = useLocation();

  return (
    <div className="relative">
      <Navigation />

      {pathname === "/" ? (
        <YellowSplashWithPicture className="relative -top-14 right-0 z-0  fill-yellow-400" />
      ) : (
        <YellowSplash className="absolute -top-0 right-0 z-0 " />
      )}

      {children}
    </div>
  );
};
