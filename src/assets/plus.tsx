import * as React from "react";
import { SVGProps } from "react";

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="18"
    height="19"
    viewBox="0 0 18 19"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M10.748 18.084H7.221V10.92H.093V7.428H7.22V.264h3.527v7.164h7.165v3.492h-7.165v7.164Z" />
  </svg>
);

export default SvgComponent;
