import React from 'react';
import { motion } from 'framer-motion';

export default function ShimmerButton({
  children,
  className = "",
  shimmerColor = "#06b6d4",
  shimmerSize = "0.1em",
  borderRadius = "9999px",
  shimmerDuration = "3s",
  background = "rgba(10, 13, 22, 0.95)",
  onClick,
  ...props
}) {
  return (
    <motion.button
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      onClick={onClick}
      style={{
        '--spread': '90deg',
        '--shimmer-color': shimmerColor,
        '--radius': borderRadius,
        '--speed': shimmerDuration,
        '--cut': shimmerSize,
        '--bg': background,
      }}
      className={`group relative z-0 flex cursor-pointer items-center justify-center overflow-hidden whitespace-nowrap border border-white/15 px-6 py-3 text-white [background:var(--bg)] [border-radius:var(--radius)] shadow-lg shadow-cyan-500/15 ${className}`}
      {...props}
    >
      {/* Spark / Shimmer container */}
      <div className="absolute inset-0 -z-30 overflow-visible [container-type:size]">
        <div className="absolute inset-0 h-[100cqh] animate-shimmer-slide [aspect-ratio:1] [border-radius:0] [mask:none]">
          <div className="absolute -inset-full w-auto rotate-0 animate-spin-slow [background:conic-gradient(from_0deg,transparent_0_340deg,var(--shimmer-color)_360deg)]" />
        </div>
      </div>

      {/* Inner background mask */}
      <div className="absolute inset-[1.5px] -z-20 rounded-[inherit] bg-[#0c101c]" />

      {/* Content */}
      <div className="relative z-10 flex items-center gap-2 font-medium text-sm">
        {children}
      </div>
    </motion.button>
  );
}
