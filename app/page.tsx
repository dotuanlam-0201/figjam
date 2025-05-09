"use client"

import { Stage } from "react-konva"

export default function Home() {
  return (
    <Stage
      style={{
        background: "#f5f5f5",
        backgroundImage: "radial-gradient(#C4C4C4 1px, transparent 0)",
        backgroundSize: "20px 20px",
      }}
      width={window.innerWidth}
      height={window.innerHeight}
    ></Stage>
  )
}
