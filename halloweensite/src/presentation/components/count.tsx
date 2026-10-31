"use client";

import { useEffect, useState } from "react";
import { siteContent } from "@/data/site-content";

const SECOND = 1_000;
const MINUTE = 60 * SECOND;
const HOUR = 60 * MINUTE;

function getCountdown(now: Date): string {
  const target = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
  const remaining = target.getTime() - now.getTime();
  const hours = Math.floor(remaining / HOUR);
  const minutes = Math.floor((remaining % HOUR) / MINUTE);
  const seconds = Math.floor((remaining % MINUTE) / SECOND);
  return [hours, minutes, seconds].map((value) => String(value).padStart(2, "0")).join(":");
}

export default function Countdown() {
  const [value, setValue] = useState(siteContent.countdown);

  useEffect(() => {
    const update = () => setValue(getCountdown(new Date()));
    update();
    const intervalId = window.setInterval(update, SECOND);
    return () => window.clearInterval(intervalId);
  }, []);

  return (
    <div className="countdown" role="timer" aria-label={siteContent.labels.countdown}>
      <img src="/icon.svg" alt="" />
      <span className="text-lg">{value}</span>
    </div>
  );
}
