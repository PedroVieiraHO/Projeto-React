import * as React from "react";
const SvgEye =  ({ color = 'black' , size = '1em'}) => (
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
      clipPath="url(#eye_svg__a)"
    >
      <path d="M1.5 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8" />
      <path d="M12.5 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
    </g>
    <defs>
      <clipPath id="eye_svg__a">
        <path fill="#fff" d="M.5 0h24v24H.5z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgEye;
