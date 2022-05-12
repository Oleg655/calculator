import * as React from "react";
import { SVGProps } from "react";

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="26"
    height="26"
    viewBox="0 0 26 26"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M15.069 26h-3.276L5.277 11.492H.309V8.324h7.236l5.904 13.284L21.585.8h3.528L15.069 26Z" />
  </svg>
);

export default SvgComponent;
