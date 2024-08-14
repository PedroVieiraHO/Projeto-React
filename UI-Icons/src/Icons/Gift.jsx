import * as React from "react";
const SvgGift =  ({ color = 'black' , size = '1em' }) => (
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
      d="M20.5 12v10h-16V12M22.5 7h-20v5h20zM12.5 22V7M12.5 7H8a2.5 2.5 0 1 1 0-5c3.5 0 4.5 5 4.5 5M12.5 7H17a2.5 2.5 0 0 0 0-5c-3.5 0-4.5 5-4.5 5"
    />
  </svg>
);
export default SvgGift;
