import * as React from "react";
const SvgCircleGray =  ({ color = 'black' , size = '1em' }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    fill="none"
    viewBox="0 0 40 40"
   
  >
    <rect width={40} height={40} fill={color} rx={20} />
  </svg>
);
export default SvgCircleGray;
