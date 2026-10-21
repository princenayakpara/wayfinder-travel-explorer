
"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="empty">
      <span className="pill">INDEX ERROR</span>
      <h1>We couldn&apos;t load this view.</h1>
      <p>The local spatial index encountered an unexpected issue.</p>
      <button className="primary" onClick={() => reset()}>
        Retry index query
      </button>
    </div>
  );
}
