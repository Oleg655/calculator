import * as React from "react";
import { SVGProps } from "react";

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="20"
    height="35"
    viewBox="0 0 20 35"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M4.25 34.04H.29L15.446.488h3.96L4.25 34.04Z" />
  </svg>
);

export default SvgComponent;
