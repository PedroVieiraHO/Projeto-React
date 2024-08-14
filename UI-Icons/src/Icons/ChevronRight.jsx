import * as React from "react";
const SvgChevronRight =  ({ color = 'black' , size = '1em' }) => (
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
      d="m9.5 18 6-6-6-6"
    />
  </svg>
);
export default SvgChevronRight;
