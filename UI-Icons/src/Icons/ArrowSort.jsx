import * as React from "react";
const SvgArrowSort =  ({ color = 'black', size = '1em' }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    fill="none"
    viewBox="0 0 25 24"
  
  >
    <path
      stroke={color}
      strokeWidth={2.5}
      d="M10.313 8.344H20.7M10.313 13.656h7.164M4.94 0v22m0 0 3.94-4.246M4.94 22 1 17.754M10.313 2.277h14.686"
    />
  </svg>
);
export default SvgArrowSort;
