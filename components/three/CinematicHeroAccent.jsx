export default function CinematicHeroAccent() {
  return (
    <svg
      viewBox="0 0 520 520"
      className="h-full w-full"
      focusable="false"
      aria-hidden="true"
    >
      <defs>
        <radialGradient id="orbital-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#EAD39D" stopOpacity="0.18" />
          <stop offset="70%" stopColor="#E2C98E" stopOpacity="0.04" />
          <stop offset="100%" stopColor="#E2C98E" stopOpacity="0" />
        </radialGradient>
      </defs>
      <circle cx="260" cy="260" r="150" fill="url(#orbital-glow)" />
      <g fill="none" transform="rotate(-12 260 260)">
        <ellipse cx="260" cy="260" rx="154" ry="72" stroke="#E2C98E" strokeOpacity="0.48" strokeWidth="1.5">
          <animateTransform attributeName="transform" type="rotate" from="0 260 260" to="360 260 260" dur="28s" repeatCount="indefinite" />
        </ellipse>
        <ellipse cx="260" cy="260" rx="198" ry="96" stroke="#B7D4E2" strokeOpacity="0.28" strokeWidth="1" transform="rotate(62 260 260)">
          <animateTransform attributeName="transform" type="rotate" from="62 260 260" to="422 260 260" dur="38s" repeatCount="indefinite" />
        </ellipse>
        <ellipse cx="260" cy="260" rx="220" ry="122" stroke="#E2C98E" strokeOpacity="0.2" strokeWidth="1" transform="rotate(118 260 260)">
          <animateTransform attributeName="transform" type="rotate" from="118 260 260" to="-242 260 260" dur="46s" repeatCount="indefinite" />
        </ellipse>
      </g>
      <g fill="none" stroke="#EAD39D" strokeOpacity="0.26" strokeWidth="1">
        <path d="M260 218 296 239 296 281 260 302 224 281 224 239Z" />
        <path d="m260 218 0 84M224 239l72 42M296 239l-72 42" />
      </g>
      <circle cx="332" cy="170" r="5" fill="#FFF4D7" fillOpacity="0.9" />
      {Array.from({ length: 30 }, (_, index) => {
        const angle = index * 2.399;
        const radius = 92 + (index % 6) * 24;
        const x = 260 + Math.cos(angle) * radius;
        const y = 260 + Math.sin(angle) * radius;
        return <circle key={index} cx={x} cy={y} r="1.35" fill="#D8EDF5" fillOpacity="0.58" />;
      })}
    </svg>
  );
}
