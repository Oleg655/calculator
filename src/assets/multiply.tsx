import * as React from "react";
import { SVGProps } from "react";

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="16"
    height="17"
    viewBox="0 0 16 17"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="m8.032 10.64-5.436 5.4-2.484-2.448 5.436-5.4L.112 2.72 2.596.272l5.4 5.436L13.432.272 15.88 2.72l-5.4 5.472 5.4 5.4-2.448 2.448-5.4-5.4Z"
    />
  </svg>
);

export default SvgComponent;
