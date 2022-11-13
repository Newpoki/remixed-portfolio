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

const ANIMATIONS_DURATION = 300;

export const NavigationDrawer = ({ isOpen }: Props) => {
  return (
    <div
      className={classNames("absolute left-0 top-0 h-screen w-screen -translate-x-full", {
        // Display the drawer to the user
        "translate-x-0": isOpen,
        // Wait for the opacity and the links menu to end transition before transitioning
        // We only want the delay when closing the drawer
        [`delay-${ANIMATIONS_DURATION}`]: !isOpen,
      })}
    >
      <div
        className={classNames(
          `relative z-50 inline-flex h-screen -translate-x-full flex-col bg-neutral-700 p-6 duration-${ANIMATIONS_DURATION}`,
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

      <div
        className={classNames(
          "absolute top-0 left-0 z-40 h-screen w-screen bg-neutral-800/80 opacity-0 transition-opacity duration-300",
          { "opacity-100": isOpen }
        )}
      />
    </div>
  );
};
