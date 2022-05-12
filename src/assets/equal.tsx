import * as React from "react";
import { SVGProps } from "react";

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="18"
    height="13"
    viewBox="0 0 18 13"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M17.913 3.816H.093V.324h17.82v3.492Zm0 8.208H.093V8.532h17.82v3.492Z" />
  </svg>
);

export default SvgComponent;
