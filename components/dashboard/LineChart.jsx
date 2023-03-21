// components/LineChart.js
import { useEffect, useRef } from 'react'
import Chart from 'chart.js/auto'

function LineChart({ data, options }) {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    const chart = new Chart(ctx, {
      type: 'line',
      data,
      options,
    })
    return () => chart.destroy()
  }, [data, options])

  return <canvas ref={canvasRef} />
}

export default LineChart
