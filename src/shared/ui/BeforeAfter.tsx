'use client'
import React from 'react'

interface BeforeAfterProps {
  before: string;
  after: string;
  beforeLabel?: string;
  afterLabel?: string;
}

export default function BeforeAfter({
  before,
  after,
  beforeLabel = "Before",
  afterLabel = "After"
}: BeforeAfterProps) {
  const [sliderPosition, setSliderPosition] = React.useState(50);

  return (
    <div className="relative h-full w-full overflow-hidden rounded-lg">
      {/* Before 이미지 */}
      <img
        src={before}
        alt={beforeLabel}
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* After 이미지 (슬라이더 위치에 따라 표시) */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ width: `${sliderPosition}%` }}
      >
        <img
          src={after}
          alt={afterLabel}
          className="h-full w-full object-cover"
        />
      </div>

      {/* 슬라이더 */}
      <input
        type="range"
        min={0}
        max={100}
        value={sliderPosition}
        onChange={(e) => setSliderPosition(parseInt(e.target.value))}
        className="absolute bottom-3 left-1/2 z-10 -translate-x-1/2 w-[80%] cursor-ew-resize accent-emerald-600"
        aria-label="before-after slider"
      />

      {/* 구분선 */}
      <div
        className="pointer-events-none absolute inset-y-0 z-10 w-0.5 bg-white/80 shadow"
        style={{ left: `${sliderPosition}%` }}
      />

      {/* 라벨 */}
      <div className="absolute left-3 top-3 rounded bg-black/50 px-2 py-1 text-xs text-white">
        {beforeLabel}
      </div>
      <div className="absolute right-3 top-3 rounded bg-black/50 px-2 py-1 text-xs text-white">
        {afterLabel}
      </div>
    </div>
  )
}
