import { useEffect, useState } from "react";

export default function AnimatedClock() {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setDate(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const seconds = date.getSeconds();
  const minutes = date.getMinutes();
  const hours = date.getHours();

  const secondAngle = seconds * 6;
  const minuteAngle = minutes * 6 + seconds * 0.1;
  const hourAngle = ((hours % 12) * 30) + (minutes * 0.5);

  return (
    <svg width="220" height="220" viewBox="0 0 220 220">
      <circle cx="110" cy="110" r="100" fill="rgba(30,0,60,0.4)" stroke="#a855f7" strokeWidth="6" />
      <line
        x1="110" y1="110"
        x2={110 + 45 * Math.sin(Math.PI * hourAngle / 180)}
        y2={110 - 45 * Math.cos(Math.PI * hourAngle / 180)}
        stroke="#fff" strokeWidth="6" strokeLinecap="round"
      />
      <line
        x1="110" y1="110"
        x2={110 + 70 * Math.sin(Math.PI * minuteAngle / 180)}
        y2={110 - 70 * Math.cos(Math.PI * minuteAngle / 180)}
        stroke="#a855f7" strokeWidth="4" strokeLinecap="round"
      />
      <line
        x1="110" y1="110"
        x2={110 + 85 * Math.sin(Math.PI * secondAngle / 180)}
        y2={110 - 85 * Math.cos(Math.PI * secondAngle / 180)}
        stroke="#f472b6" strokeWidth="2" strokeLinecap="round"
      />
      <circle cx="110" cy="110" r="8" fill="#a855f7" />
    </svg>
  );
}