interface SectionDividerProps {
  variant?: 'wave' | 'diagonal' | 'curved';
  color?: string;
  flip?: boolean;
}

export default function SectionDivider({
  variant = 'wave',
  color = '#E8F5F3',
  flip = false,
}: SectionDividerProps) {
  const transforms = flip ? 'scaleY(-1)' : 'scaleY(1)';

  if (variant === 'diagonal') {
    return (
      <svg
        className="w-full h-24 md:h-32"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        style={{ transform: transforms }}
      >
        <path
          d="M0,50 L1200,0 L1200,120 L0,120 Z"
          fill={color}
        />
      </svg>
    );
  }

  if (variant === 'curved') {
    return (
      <svg
        className="w-full h-24 md:h-32"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        style={{ transform: transforms }}
      >
        <path
          d="M0,60 Q300,0 600,60 T1200,60 L1200,120 L0,120 Z"
          fill={color}
        />
      </svg>
    );
  }

  // Default wave
  return (
    <svg
      className="w-full h-24 md:h-32"
      viewBox="0 0 1200 120"
      preserveAspectRatio="none"
      style={{ transform: transforms }}
    >
      <path
        d="M0,40 Q300,80 600,40 T1200,40 L1200,120 L0,120 Z"
        fill={color}
      />
    </svg>
  );
}
