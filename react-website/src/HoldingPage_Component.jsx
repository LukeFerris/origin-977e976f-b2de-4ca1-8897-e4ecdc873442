import React from "react";
import logo from "../assets/logoOnWhite.png";

const styles = {
  "@keyframes rotate": {
    from: {
      transform: "rotate(0deg)",
    },
    to: {
      transform: "rotate(360deg)",
    },
  },
  rotate: {
    animation: "rotate 20s linear infinite",
  },
};

export default function HoldingPage_Component() {
  return (
    <div className="min-h-screen flex flex-col justify-center h-4/5 px-4 text-center">
      <style>
        {`
          @keyframes rotate {
            from {
              transform: rotate(0deg);
            }
            to {
              transform: rotate(360deg);
            }
          }
        `}
      </style>
      <div style={{ textAlign: "center" }}>
        <div className="w-full flex justify-center">
          <img src={logo} style={styles.rotate} alt="Logo" />
        </div>

        <h1
          style={{
            display: "block",
            fontSize: "2em",
            marginBlockStart: "0.67em",
            marginBlockEnd: "0.67em",
            marginInline: "0px",
            marginInlineEnd: "0px",
            fontWeight: "bold",
          }}
        >
          Hello, Brave New World
        </h1>
        <div>
          This is an Origin blank canvas. Work with your AI architect to fill it
          with something amazing.
        </div>
      </div>
    </div>
  );
}
