import * as React from "react";
import { SVGProps } from "react";

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="12"
    height="4"
    viewBox="0 0 12 4"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M11.306 3.828H.686V.336h10.62v3.492Z"  />
  </svg>
);

export default SvgComponent;
