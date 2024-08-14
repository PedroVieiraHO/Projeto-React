import * as React from "react";
const SvgVector1 =  ({ color = 'black' , size = '1em' }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    fill="none"
    viewBox="0 0 18 19"
    
  >
    <path
      stroke={color}
      strokeWidth={2}
      d="M3.246 4.097H17m0 0V1H1v3.613l6.175 6.193v4.13L9.982 17l.562-.516v-5.678z"
    />
  </svg>
);
export default SvgVector1;
