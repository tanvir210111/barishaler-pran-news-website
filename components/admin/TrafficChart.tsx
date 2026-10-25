"use client";

import React, { useState } from "react";

interface DataPoint {
  date: string;
  value: number;
}

const TRAFFIC_DATA: DataPoint[] = [
  { date: "2026-10-12", value: 18477 },
  { date: "2026-10-13", value: 13134 },
  { date: "2026-10-14", value: 10281 },
  { date: "2026-10-15", value: 9530 },
  { date: "2026-10-16", value: 11070 },
  { date: "2026-10-17", value: 9769 },
  { date: "2026-10-18", value: 14869 },
  { date: "2026-10-19", value: 3919 },
];

export default function TrafficChart() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // Exact aspect ratio and vertical proportions - slightly taller to prevent squashed feel
  const width = 800;
  const height = 405;
  const paddingLeft = 56;
  const paddingRight = 36;
  const paddingTop = 28;
  const paddingBottom = 48;

  const chartWidth = width - paddingLeft - paddingRight;
  const chartHeight = height - paddingTop - paddingBottom;

  const maxY = 20000;
  const yTicks = [20000, 16000, 12000, 8000, 4000, 0];

  const points = TRAFFIC_DATA.map((d, index) => {
    const x = paddingLeft + (index / (TRAFFIC_DATA.length - 1)) * chartWidth;
    const y = paddingTop + chartHeight - (d.value / maxY) * chartHeight;
    return { x, y, ...d };
  });

  // Fritsch-Carlson Monotone Cubic Spline (guarantees zero overshoot and perfectly smooth natural waves matching reference)
  const getMonotoneSplinePath = () => {
    const n = points.length;
    if (n === 0) return "";
    if (n === 1) return `M ${points[0].x} ${points[0].y}`;

    const dx: number[] = [];
    const dy: number[] = [];
    const slope: number[] = [];
    for (let i = 0; i < n - 1; i++) {
      dx.push(points[i + 1].x - points[i].x);
      dy.push(points[i + 1].y - points[i].y);
      slope.push(dy[i] / dx[i]);
    }

    const m: number[] = [];
    m.push(slope[0]);

    for (let i = 1; i < n - 1; i++) {
      if (slope[i - 1] * slope[i] <= 0) {
        m.push(0); // Flat tangent at local extrema (peaks/valleys)
      } else {
        m.push((2 * slope[i - 1] * slope[i]) / (slope[i - 1] + slope[i]));
      }
    }
    m.push(slope[n - 2]);

    let path = `M ${points[0].x.toFixed(2)} ${points[0].y.toFixed(2)}`;
    for (let i = 0; i < n - 1; i++) {
      const cp1x = points[i].x + dx[i] / 3;
      const cp1y = points[i].y + (m[i] * dx[i]) / 3;
      const cp2x = points[i + 1].x - dx[i] / 3;
      const cp2y = points[i + 1].y - (m[i + 1] * dx[i]) / 3;

      path += ` C ${cp1x.toFixed(2)} ${cp1y.toFixed(2)}, ${cp2x.toFixed(2)} ${cp2y.toFixed(2)}, ${points[i + 1].x.toFixed(2)} ${points[i + 1].y.toFixed(2)}`;
    }
    return path;
  };

  const linePath = getMonotoneSplinePath();
  const bottomY = paddingTop + chartHeight;
  const areaPath = `${linePath} L ${points[points.length - 1].x.toFixed(2)} ${bottomY} L ${points[0].x.toFixed(2)} ${bottomY} Z`;

  const hoveredPoint = hoveredIndex !== null ? points[hoveredIndex] : null;

  // Tooltip positioning
  const tooltipWidth = 124;
  const tooltipHeight = 58;
  const isRightHalf = hoveredIndex !== null && hoveredIndex >= points.length - 3;
  const tooltipX = hoveredPoint
    ? isRightHalf
      ? hoveredPoint.x - tooltipWidth - 14
      : hoveredPoint.x + 14
    : 0;
  const tooltipY = hoveredPoint
    ? Math.max(paddingTop + 10, Math.min(bottomY - tooltipHeight - 10, hoveredPoint.y - 18))
    : 0;

  return (
    <div className="w-full overflow-x-auto">
      <div className="min-w-[580px] select-none">
        <svg
          viewBox={`0 0 ${width} ${height}`}
          className="w-full h-auto overflow-visible font-sans"
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <defs>
            {/* Subtle soft transparent blue gradient fill under curve matching reference */}
            <linearGradient id="trafficGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#3858F6" stopOpacity="0.14" />
              <stop offset="70%" stopColor="#3858F6" stopOpacity="0.04" />
              <stop offset="100%" stopColor="#3858F6" stopOpacity="0.00" />
            </linearGradient>

            {/* Drop shadow for tooltip */}
            <filter id="tooltipShadow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="4" stdDeviation="5" floodColor="#0F172A" floodOpacity="0.12" />
            </filter>
          </defs>

          {/* Horizontal Grid lines and Y-axis labels in matching light slate */}
          {yTicks.map((tick) => {
            const y = paddingTop + chartHeight - (tick / maxY) * chartHeight;
            return (
              <g key={tick}>
                <text
                  x={paddingLeft - 12}
                  y={y + 4}
                  textAnchor="end"
                  fill="#64748B"
                  className="text-[12px] font-normal"
                >
                  {tick}
                </text>
                <line
                  x1={paddingLeft}
                  y1={y}
                  x2={width - paddingRight}
                  y2={y}
                  stroke="#E2E8F0"
                  strokeWidth="1"
                  strokeOpacity="0.85"
                />
              </g>
            );
          })}

          {/* Area fill under curve */}
          <path d={areaPath} fill="url(#trafficGradient)" />

          {/* Smooth natural blue curve line without wavy kinks */}
          <path
            d={linePath}
            fill="none"
            stroke="#3858F6"
            strokeWidth="2.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Vertical dashed guide line on hover */}
          {hoveredPoint && (
            <line
              x1={hoveredPoint.x}
              y1={paddingTop}
              x2={hoveredPoint.x}
              y2={bottomY}
              stroke="#94A3B8"
              strokeWidth="1.2"
              strokeDasharray="4 4"
            />
          )}

          {/* X-axis date labels and tick marks at bottom */}
          {points.map((p, idx) => {
            const isHovered = hoveredIndex === idx;

            if (isHovered) {
              return (
                <g key={p.date} className="transition-all">
                  {/* Triangular arrow pointing up */}
                  <polygon
                    points={`${p.x - 5},${bottomY + 3} ${p.x},${bottomY - 2} ${p.x + 5},${bottomY + 3}`}
                    fill="#EBF2FA"
                    stroke="#94A3B8"
                    strokeWidth="1"
                  />
                  {/* Highlighted box around date */}
                  <rect
                    x={p.x - 44}
                    y={bottomY + 2}
                    width="88"
                    height="28"
                    rx="3"
                    fill="#EBF2FA"
                    stroke="#94A3B8"
                    strokeWidth="1"
                  />
                  {/* Date text */}
                  <text
                    x={p.x}
                    y={bottomY + 20}
                    textAnchor="middle"
                    fill="#0F172A"
                    className="text-[12px] font-medium"
                  >
                    {p.date}
                  </text>
                </g>
              );
            }

            return (
              <g key={p.date}>
                <line
                  x1={p.x}
                  y1={bottomY}
                  x2={p.x}
                  y2={bottomY + 5}
                  stroke="#CBD5E1"
                  strokeWidth="1"
                />
                <text
                  x={p.x}
                  y={bottomY + 24}
                  textAnchor="middle"
                  fill="#475569"
                  className="text-[12px] font-normal"
                >
                  {p.date}
                </text>
              </g>
            );
          })}

          {/* Value badge pills centered directly on the curve points */}
          {points.map((p, idx) => {
            const isHovered = hoveredIndex === idx;
            return (
              <g
                key={p.date}
                transform={`translate(${p.x}, ${p.y})`}
                className="cursor-pointer"
                onMouseEnter={() => setHoveredIndex(idx)}
              >
                <rect
                  x="-21"
                  y="-10"
                  width="42"
                  height="20"
                  rx="3.5"
                  fill="#3858F6"
                  className={`transition-all duration-150 ${
                    isHovered ? "ring-2 ring-blue-300 filter drop-shadow" : ""
                  }`}
                />
                <text
                  x="0"
                  y="4.5"
                  textAnchor="middle"
                  fill="#FFFFFF"
                  className="text-[11.5px] font-bold select-none tracking-tight pointer-events-none"
                >
                  {p.value}
                </text>
              </g>
            );
          })}

          {/* Hover Column Hit Areas (Wide invisible vertical slices for easy hovering) */}
          {points.map((p, idx) => {
            const sliceWidth = chartWidth / (points.length - 1);
            return (
              <rect
                key={`hit-${p.date}`}
                x={p.x - sliceWidth / 2}
                y={paddingTop}
                width={sliceWidth}
                height={chartHeight + 35}
                fill="transparent"
                className="cursor-pointer"
                onMouseEnter={() => setHoveredIndex(idx)}
              />
            );
          })}

          {/* Interactive Floating Tooltip matching Screenshot exactly */}
          {hoveredPoint && (
            <g
              transform={`translate(${tooltipX}, ${tooltipY})`}
              filter="url(#tooltipShadow)"
              className="pointer-events-none transition-all duration-150"
            >
              {/* Outer Card Background */}
              <rect
                x="0"
                y="0"
                width={tooltipWidth}
                height={tooltipHeight}
                rx="6"
                fill="#FFFFFF"
                stroke="#E2E8F0"
                strokeWidth="1"
              />

              {/* Tooltip Header (Gray bar with date) */}
              <path
                d={`M 0 6 A 6 6 0 0 1 6 0 L ${tooltipWidth - 6} 0 A 6 6 0 0 1 ${tooltipWidth} 6 L ${tooltipWidth} 22 L 0 22 Z`}
                fill="#F1F3F5"
                stroke="#E2E8F0"
                strokeWidth="1"
              />
              <text
                x="10"
                y="15"
                fill="#475569"
                className="text-[11.5px] font-semibold tracking-tight"
              >
                {hoveredPoint.date}
              </text>

              {/* Tooltip Body: Blue Circle + "Views: " + Bold Value */}
              <circle cx="16" cy="38" r="4.5" fill="#2563EB" />
              <text x="26" y="42" fill="#64748B" className="text-[12px] font-normal">
                Views:
              </text>
              <text x="66" y="42" fill="#0F172A" className="text-[12px] font-bold">
                {hoveredPoint.value}
              </text>
            </g>
          )}
        </svg>
      </div>
    </div>
  );
}
