import * as React from "react";
import { SVGProps } from "react";

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="10"
    height="26"
    viewBox="0 0 10 26"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M9.459 26H5.57V5.048L.063 8V4.148L6.003.8h3.456V26Z"
      
    />
  </svg>
);

export default SvgComponent;
