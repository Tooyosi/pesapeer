import React from "react";

function WalletIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="70"
      height="70"
      fill="none"
      viewBox="0 0 70 70"
    >
      <path
        fill="#fff"
        d="M6.022 28.09c.086-.346.151-.671.238-1.018C7.04 24.256 9.076 22.065 12 22c.108 0 .866 0 .845.242 0 .151.021.281.021.411 0 .715-.021 1.452 0 2.167C12.91 25.448 13 26 12 26c-.823 0-.845 1.116-.823 1.852v1.083c.022.433.26.672.671.693.152.022.325 0 .477 0h49.733v9.66H60.91c-3.813 0-7.625-.02-11.437 0-3.79 0-6.672 2.882-6.693 6.672v2.816c.021 3.726 2.902 6.607 6.628 6.607H62.1v8.014c0 1.127-.476 1.603-1.581 1.603H12.78c-3.466 0-6.087-2.188-6.715-5.589L6 59.151c.022-10.332.022-20.707.022-31.06z"
      ></path>
      <path
        fill="#fff"
        d="M64.765 50.639c-.065.151-.108.325-.173.476a2.615 2.615 0 01-2.447 1.668c-4.268 0-8.535.022-12.802 0-2.014 0-3.704-1.56-3.834-3.552a27.34 27.34 0 010-3.769c.152-1.993 1.841-3.509 3.856-3.509 3.812-.022 7.624 0 11.436 0h1.213c1.365.022 2.318.715 2.708 2.036l.065.13c-.022 2.166-.022 4.354-.022 6.52zm-12-3.27a1.964 1.964 0 00-1.97-1.972 1.978 1.978 0 00-1.972 1.971c0 1.083.888 1.971 1.971 1.971 1.083.022 1.971-.866 1.971-1.97z"
      ></path>
      <mask
        id="mask0_1901_5303"
        style={{ maskType: "alpha" }}
        width="70"
        height="70"
        x="0"
        y="0"
        maskUnits="userSpaceOnUse"
      >
        <path fill="#C4C4C4" d="M0 0H70V70H0z"></path>
      </mask>
      <g mask="url(#mask0_1901_5303)">
        <path fill="#fff" d="M12 22h48a2 2 0 110 4H12v-4z"></path>
      </g>
    </svg>
  );
}

export default WalletIcon;