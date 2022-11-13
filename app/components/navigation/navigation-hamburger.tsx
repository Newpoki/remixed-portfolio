import classNames from "classnames";
import { MouseEventHandler } from "react";

type Props = {
  isOpen: boolean;
  onClick: MouseEventHandler<HTMLButtonElement>;
};

export const NavigationHamburger = ({ isOpen, onClick }: Props) => {
  return (
    <button className="group relative block lg:hidden" onClick={onClick}>
      <div className="relative flex h-[50px] w-[50px] transform items-center justify-center overflow-hidden transition-all duration-200">
        <div className="flex h-[16px] w-[20px] origin-center transform flex-col justify-between overflow-hidden transition-all duration-300">
          <div
            className={classNames(
              "h-[2px] w-7 origin-left transform bg-white transition-all delay-100 duration-300",
              { "translate-y-6": isOpen }
            )}
          />

          <div
            className={classNames(
              "h-[2px] w-7 transform bg-white transition-all delay-75 duration-300",
              { "translate-y-6": isOpen }
            )}
          />

          <div
            className={classNames(
              "h-[2px] w-7 origin-left transform bg-white transition-all duration-300",
              { "translate-y-6": isOpen }
            )}
          />

          <div
            className={classNames(
              "absolute top-2.5 flex w-0 -translate-x-10 transform items-center justify-between transition-all duration-500",
              { "w-12": isOpen, "translate-x-0": isOpen }
            )}
          >
            <div
              className={classNames(
                "absolute h-[2px] w-5 rotate-0 transform bg-white transition-all delay-300 duration-500",
                { "rotate-45": isOpen }
              )}
            />
            <div
              className={classNames(
                "absolute h-[2px] w-5 -rotate-0 transform bg-white transition-all delay-300 duration-500",
                { "-rotate-45": isOpen }
              )}
            />
          </div>
        </div>
      </div>
    </button>
  );
};
