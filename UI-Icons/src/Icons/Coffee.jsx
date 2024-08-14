import * as React from "react";
const SvgCoffee =  ({ color = 'black' , size = '1em'}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    fill="none"
    viewBox="0 0 25 24"
 
  >
    <g
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      clipPath="url(#coffee_svg__a)"
    >
      <path d="M18.5 8h1a4 4 0 1 1 0 8h-1M2.5 8h16v9a4 4 0 0 1-4 4h-8a4 4 0 0 1-4-4zM6.5 1v3M10.5 1v3M14.5 1v3" />
    </g>
    <defs>
      <clipPath id="coffee_svg__a">
        <path fill="#fff" d="M.5 0h24v24H.5z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgCoffee;
