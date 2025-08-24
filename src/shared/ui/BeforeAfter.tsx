'use client'
import React from 'react'
import Image from "next/image";

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
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <div
      className="relative h-full w-full cursor-pointer group"
      style={{ perspective: '1000px' }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className="relative w-full h-full transition-transform duration-700 ease-in-out"
        style={{
          transformStyle: 'preserve-3d',
          transform: isHovered ? 'rotateY(180deg)' : 'rotateY(0deg)'
        }}
      >
        {/* 앞면 - Before 이미지 */}
        <div
          className="absolute inset-0 w-full h-full rounded-lg overflow-hidden"
          style={{ backfaceVisibility: 'hidden' }}
        >
          <Image
            src={before}
            alt={beforeLabel}
            fill
            className="object-cover"
          />
          {/* 앞면 라벨 */}
          <div className="absolute left-3 top-3 rounded bg-black/50 px-2 py-1 text-xs text-white z-10">
            {beforeLabel}
          </div>
          {/* 플립 힌트 */}
          <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 rounded bg-black/50 px-3 py-1 text-xs text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-10">
            Hover to flip
          </div>
        </div>

        {/* 뒷면 - After 이미지 */}
        <div
          className="absolute inset-0 w-full h-full rounded-lg overflow-hidden"
          style={{
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)'
          }}
        >
          <Image
            src={after}
            alt={afterLabel}
            fill
            className="object-cover"
          />
          {/* 뒷면 라벨 */}
          <div className="absolute left-3 top-3 rounded bg-black/50 px-2 py-1 text-xs text-white z-10">
            {afterLabel}
          </div>
        </div>
      </div>
    </div>
  )
}
