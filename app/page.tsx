"use client"

import Konva from "konva"
import React, { useEffect, useRef, useState } from "react"
import { Stage } from "react-konva"
const WIDTH = 3000
const HEIGHT = 3000
const NUMBER = 200

export default function Home() {
  const stageRef = useRef(null as Konva.Stage | null)
  const containerRef = useRef<null | HTMLDivElement>(null)
  const [container, setContainer] = useState({
    width: 0,
    height: 0,
  })
  const [nodes] = React.useState(() =>
    Array(NUMBER).map(() => ({
      x: WIDTH * Math.random(),
      y: HEIGHT * Math.random(),
    }))
  )
  useEffect(() => {
    if (containerRef.current) {
      setContainer({
        width: containerRef.current.clientWidth,
        height: containerRef.current.clientHeight,
      })
    }
  }, [containerRef.current])

  return (
    <main ref={containerRef} className="w-screen h-screen">
      <Stage
        ref={stageRef}
        draggable
        className="bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"
        width={container.width}
        height={container.height}
      ></Stage>
    </main>
  )
}
