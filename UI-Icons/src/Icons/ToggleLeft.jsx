import * as React from "react";
const SvgToggleLeft =  ({ color = 'black' , size = '1em'}) => (
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
      clipPath="url(#toggle-left_svg__a)"
    >
      <path d="M16.5 5h-8a7 7 0 0 0 0 14h8a7 7 0 1 0 0-14" />
      <path d="M8.5 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
    </g>
    <defs>
      <clipPath id="toggle-left_svg__a">
        <path fill="#fff" d="M.5 0h24v24H.5z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgToggleLeft;
