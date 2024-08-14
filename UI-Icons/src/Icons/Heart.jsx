import * as React from "react";
const SvgHeart =  ({ color = 'black', size = '1em' }) => (
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
      d="M21.34 4.61a5.5 5.5 0 0 0-7.78 0L12.5 5.67l-1.06-1.06a5.501 5.501 0 1 0-7.78 7.78l1.06 1.06 7.78 7.78 7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78"
    />
  </svg>
);
export default SvgHeart;
