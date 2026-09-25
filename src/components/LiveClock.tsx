"use client";

import { useEffect, useState } from "react";

function parts(now: Date) {
  const time = new Intl.DateTimeFormat("en-GB", {
    timeZone: "Asia/Kolkata",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  }).format(now);
  const date = new Intl.DateTimeFormat("en-GB", {
    timeZone: "Asia/Kolkata",
    weekday: "short",
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  }).format(now);
  return { time: time.toUpperCase(), date };
}

export function LiveClock({ compact = false }: { compact?: boolean }) {
  const [now, setNow] = useState(() => new Date());
  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);
  const { time, date } = parts(now);
  return (
    <span className="font-mono2 whitespace-nowrap text-[11px] tracking-wide text-[#181713]" aria-label={`Current time in India: ${time}, ${date}`}>
      IST / {time}
      {!compact && <span className="ml-3 hidden sm:inline">{date}</span>}
    </span>
  );
}
