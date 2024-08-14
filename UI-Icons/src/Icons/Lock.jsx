import * as React from "react";
const SvgLock =  ({ color = 'black' , size = '1em'}) => (
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
      d="M19.5 11h-14a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7a2 2 0 0 0-2-2M7.5 11V7a5 5 0 1 1 10 0v4"
    />
  </svg>
);
export default SvgLock;
