import { MouseEvent, useCallback, useState } from "react";
import {
  CaseWithTimeIcon,
  HomeIcon,
  InformationCircleIcon,
  PenWithRuleIcon,
  SettingsIcon,
} from "~/icons";
import { NavigationDrawer } from "./navigation/navigation-drawer";
import { NavigationHamburger } from "./navigation/navigation-hamburger";
import { NavigationLink } from "./navigation/navigation-link";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleMenu = useCallback((event: MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();

    setIsOpen((actualIsOpen) => !actualIsOpen);
  }, []);

  const handleCloseMenu = useCallback(() => {
    setIsOpen(false);
  }, []);

  return (
    <header
      className="relative z-20 flex h-14 items-center justify-between bg-gradient-to-r from-white-1/10 to-white-1/10 px-6 text-gray-400 backdrop-blur-sm lg:h-20 lg:px-28"
      onClick={handleCloseMenu}
    >
      <NavigationHamburger isOpen={isOpen} onClick={handleToggleMenu} />

      <h3 className="flex items-center text-lg text-white">Jason Savelli</h3>
      <div className="hidden gap-6 lg:flex">
        <NavigationLink Icon={HomeIcon} path="/">
          Home
        </NavigationLink>

        <NavigationLink Icon={PenWithRuleIcon} path="/projects">
          Projects
        </NavigationLink>

        <NavigationLink Icon={CaseWithTimeIcon} path="/experiencies">
          Experiencies
        </NavigationLink>

        <NavigationLink Icon={InformationCircleIcon} path="/about">
          About
        </NavigationLink>

        <button>
          <SettingsIcon />
          Settings
        </button>
      </div>

      <button className="hidden items-center gap-1 lg:flex">
        <SettingsIcon className="h-6" />
        <span>Settings</span>
      </button>

      <NavigationDrawer isOpen={isOpen} />
    </header>
  );
};
