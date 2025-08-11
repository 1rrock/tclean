'use client'
import { useState, useRef, useEffect } from 'react';

export function useAccordion(initialOpen = false) {
  const [isOpen, setIsOpen] = useState(initialOpen);
  const [height, setHeight] = useState<number | undefined>(initialOpen ? undefined : 0);
  const contentRef = useRef<HTMLDivElement>(null);

  const toggle = () => {
    setIsOpen(prev => !prev);
  };

  useEffect(() => {
    if (!contentRef.current) return;

    if (isOpen) {
      // 열릴 때: 실제 높이로 설정
      const scrollHeight = contentRef.current.scrollHeight;
      setHeight(scrollHeight);
    } else {
      // 닫힐 때: 0으로 설정
      setHeight(0);
    }
  }, [isOpen]);

  const contentStyle = {
    height: height,
    overflow: 'hidden' as const,
    transition: 'height 0.3s ease-in-out',
  };

  return {
    isOpen,
    toggle,
    contentRef,
    contentStyle,
  };
}
