import * as React from "react";
import { SVGProps } from "react";

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="18"
    height="26"
    viewBox="0 0 18 26"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M6.398 26H2.15L13.058 4.364H.35V.8h17.208v3.06L6.398 26Z" />
  </svg>
);

export default SvgComponent;
