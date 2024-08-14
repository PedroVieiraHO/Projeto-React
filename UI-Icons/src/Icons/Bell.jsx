import * as React from "react";
const SvgBell =  ({ color = 'black' , size = '1em'}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    fill="none"
    viewBox="0 0 25 24"
  
  >
    <path
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M18.5 8a6 6 0 1 0-12 0c0 7-3 9-3 9h18s-3-2-3-9M14.23 21a2 2 0 0 1-3.46 0"
    />
  </svg>
);
export default SvgBell;
