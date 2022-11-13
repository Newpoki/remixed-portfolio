import classNames from "classnames";
import {
  CaseWithTimeIcon,
  HomeIcon,
  InformationCircleIcon,
  PenWithRuleIcon,
  SettingsIcon,
} from "~/icons";
import { NavigationLink } from "./navigation-link";

type Props = {
  isOpen: boolean;
};

export const NavigationDrawer = ({ isOpen }: Props) => {
  return (
    <div
      className={classNames(
        "absolute left-0 top-0 h-screen w-screen -translate-x-full bg-neutral-800/80 opacity-0 transition-opacity duration-500",
        { "translate-x-0": isOpen, "opacity-100": isOpen }
      )}
    >
      <div
        className={classNames(
          "inline-flex h-screen -translate-x-full flex-col bg-neutral-700 p-6 duration-500",
          { "translate-x-0": isOpen }
        )}
      >
        <NavigationLink className="mb-4" Icon={HomeIcon} path="/">
          Home
        </NavigationLink>

        <NavigationLink className="mb-4" Icon={PenWithRuleIcon} path="/projects">
          Projects
        </NavigationLink>

        <NavigationLink className="mb-4" Icon={CaseWithTimeIcon} path="/experiencies">
          Experiencies
        </NavigationLink>

        <NavigationLink className="mb-4" Icon={InformationCircleIcon} path="/about">
          About
        </NavigationLink>

        <button className="mt-auto flex items-center gap-1">
          <SettingsIcon className="w-6" />
          Settings
        </button>
      </div>
    </div>
  );
};
