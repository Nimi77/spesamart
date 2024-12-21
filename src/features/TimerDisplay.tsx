'use client';

import { calculateTimeLeft } from '@/utilis/timer';
import { useEffect, useState } from 'react';

interface TimerDisplayProps {
  TimeUnit: ({ label, value }: { label: string; value: string }) => JSX.Element;
  separator?: () => JSX.Element;
}

const TimerDisplay = ({
  TimeUnit,
  separator: Separator,
}: TimerDisplayProps) => {
  const SEVEN_DAYS_IN_MS = 7 * 24 * 60 * 60 * 1000;
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const storedEndTime = localStorage.getItem('timerEnd');
    let endTime = storedEndTime
      ? Number.parseInt(storedEndTime, 10)
      : Date.now() + SEVEN_DAYS_IN_MS;

    // saving end time if not already saved
    if (!storedEndTime) {
      localStorage.setItem('timerEnd', String(endTime));
    }

    const timerInterval = setInterval(() => {
      const time = calculateTimeLeft(endTime);

      if (
        time.days === 0 &&
        time.hours === 0 &&
        time.minutes === 0 &&
        time.seconds === 0
      ) {
        // Reset the timer
        endTime = Date.now() + SEVEN_DAYS_IN_MS;
        localStorage.setItem('timerEnd', String(endTime));
      }

      setTimeLeft(time);
    }, 1000);

    return () => clearInterval(timerInterval);

    // omitting SEVEN_DAYS_IN_MS as dependency because it’s a constant.
  });

  const { days, hours, minutes, seconds } = timeLeft;

  return (
    <>
      <TimeUnit label="Days" value={String(days).padStart(2, '0')} />
      {Separator && <Separator />}
      <TimeUnit label="Hours" value={String(hours).padStart(2, '0')} />
      {Separator && <Separator />}
      <TimeUnit label="Minutes" value={String(minutes).padStart(2, '0')} />
      {Separator && <Separator />}
      <TimeUnit label="Seconds" value={String(seconds).padStart(2, '0')} />
    </>
  );
};

export default TimerDisplay;
