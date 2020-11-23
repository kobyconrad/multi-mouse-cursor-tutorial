import { useState, useEffect } from "react";

export function flare(actor: string) {
  const colors = [
    "#f3a683",
    "#f19066",
    "#f7d794",
    "#f5cd79",
    "#778beb",
    "#546de5",
    "#e77f67",
    "#e15f41",
    "#cf6a87",
    "#c44569",
    "#786fa6",
    "#574b90",
    "#f8a5c2",
    "#f78fb3",
    "#63cdda",
    "#3dc1d3",
    "#ea8685",
    "#e66767",
    "#596275",
    "#303952",
  ];

  const key = actor
    .split("")
    .map((f) => f.charCodeAt(0))
    .reduce((a, b) => a + b, 0);

  return {
    color: colors[key % colors.length],
  };
}

function Cursor(props: { fill?: string; x: number; y: number; size?: number }) {
  const [opacity, setOpacity] = useState(0.0);
  useEffect(() => {
    setTimeout(() => {
      setOpacity(1.0);
    }, 100);
  }, []);

  return (
    <div
      style={{
        position: "absolute",
        transform: `translate(${props.x}px, ${props.y}px)`,
        transition: "transform 0.27s ease-out, opacity 0.5s",
        top: 0,
        left: 0,
        zIndex: 9999999,
        opacity: opacity,
      }}
    >
      <svg
        width={props.size || 32}
        height={(props.size || 32) + 1}
        viewBox="0 0 24 25"
        transform="rotate(-25)"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_d)">
          <path
            d="M11.3125 0.318192L19.0397 16.9318L13.4339 13.7167C12.1317 12.9698 10.5209 13.0149 9.2626 13.8335L4.5 16.9318L11.3125 0.318192Z"
            fill={props.fill || "#3995D8"}
          />
          <path
            d="M5.57059 15.6389L11.3413 1.56577L17.9221 15.7144L13.6826 13.2829C12.2177 12.4427 10.4056 12.4935 8.98994 13.4144L5.57059 15.6389Z"
            stroke="white"
          />
        </g>
        <defs>
          <filter
            id="filter0_d"
            x="0.5"
            y="0.318192"
            width="22.5397"
            height="24.6136"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="2" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow"
              result="shape"
            />
          </filter>
        </defs>
      </svg>
    </div>
  );
}

export default Cursor;
