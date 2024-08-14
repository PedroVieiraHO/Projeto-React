import * as React from "react";
const SvgSwissWallet = (props , {size = '1em'}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    fill="none"
    viewBox="0 0 162 106"
    {...props}
  >
    <g filter="url(#swiss-wallet_svg__a)">
      <path
        fill="#000"
        d="M42.567 66.186V34.99h9.443v31.195zM31.691 55.31v-9.443h31.195v9.443z"
      />
      <rect
        width={137.156}
        height={87.544}
        x={8.887}
        y={4.887}
        fill="#000"
        stroke="#fff"
        strokeWidth={9.774}
        rx={19.626}
      />
      <path
        fill="#000"
        stroke="#fff"
        strokeWidth={6.516}
        d="M122.859 37.828h26.895a4.12 4.12 0 0 1 4.118 4.119v13.418a4.12 4.12 0 0 1-4.118 4.118h-26.895c-5.98 0-10.827-4.847-10.827-10.827s4.847-10.828 10.827-10.828Z"
      />
      <ellipse cx={39.403} cy={32.117} fill="#DA291C" rx={12.597} ry={13.496} />
      <path
        fill="#fff"
        d="M37.1 39.776V25.93h4.19v13.846zm-4.828-4.827v-4.191h13.846v4.19z"
      />
    </g>
    <defs>
      <filter
        id="swiss-wallet_svg__a"
        width={161.131}
        height={105.32}
        x={0}
        y={0}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dy={4} />
        <feGaussianBlur stdDeviation={2} />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_893_208" />
        <feBlend
          in="SourceGraphic"
          in2="effect1_dropShadow_893_208"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);
export default SvgSwissWallet;
