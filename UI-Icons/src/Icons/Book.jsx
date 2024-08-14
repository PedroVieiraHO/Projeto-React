import * as React from "react";
const SvgBook =  ({ color = 'black' , size = '1em' }) => (
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
      d="M4.5 19.5A2.5 2.5 0 0 1 7 17h13.5"
    />
    <path
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M7 2h13.5v20H7a2.5 2.5 0 0 1-2.5-2.5v-15A2.5 2.5 0 0 1 7 2"
    />
  </svg>
);
export default SvgBook;
