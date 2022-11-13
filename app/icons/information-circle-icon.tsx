import { forwardRef } from "react";
import { ICON_SVG_VIEW_BOX } from "./icons-constants";
import { IconProps } from "./icons-types";

export const InformationCircleIcon = forwardRef<SVGSVGElement, IconProps>(
  ({ className, fill = "currentColor", ...others }, ref) => {
    return (
      <svg {...others} ref={ref} className={className} viewBox={ICON_SVG_VIEW_BOX} fill={fill}>
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"></path>
      </svg>
    );
  }
);
