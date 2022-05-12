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
    <path
      d="M17.583 26H.051v-2.88l7.92-7.416c1.68-1.56 2.916-2.904 3.708-4.032.72-1.08 1.08-2.232 1.08-3.456 0-1.272-.468-2.292-1.404-3.06-.912-.792-2.112-1.188-3.6-1.188C5.26 3.968 2.907 5.012.7 7.1V2.96C2.763 1.208 5.247.332 8.151.332c2.376 0 4.392.684 6.048 2.052 1.68 1.368 2.52 3.156 2.52 5.364 0 1.704-.42 3.252-1.26 4.644-.888 1.416-2.304 3.048-4.248 4.896l-5.436 5.184h11.808V26Z"
      
    />
  </svg>
);

export default SvgComponent;
