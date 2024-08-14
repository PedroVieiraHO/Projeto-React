import * as React from "react";
const SvgShoppingCart =  ({ color = 'black' , size = '1em'}) => (
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
      clipPath="url(#shopping-cart_svg__a)"
    >
      <path d="M9.5 22a1 1 0 1 0 0-2 1 1 0 0 0 0 2M20.5 22a1 1 0 1 0 0-2 1 1 0 0 0 0 2M1.5 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23.5 6h-17" />
    </g>
    <defs>
      <clipPath id="shopping-cart_svg__a">
        <path fill="#fff" d="M.5 0h24v24H.5z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgShoppingCart;
