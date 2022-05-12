import * as React from "react";
import { SVGProps } from "react";

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="22"
    height="26"
    viewBox="0 0 22 26"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M17.54 26H13.65v-6.588H.583v-3.024L13.651.8h3.888v15.228h3.924v3.384H17.54V26ZM13.65 5.876 5.083 16.028h8.568V5.876Z" />
  </svg>
);

export default SvgComponent;
