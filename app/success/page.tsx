"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Success() {
  const searchParams = useSearchParams();
  const sessionId = searchParams.get("session_id");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (sessionId) {
      setLoading(false);
    }
  }, [sessionId]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center">
      {loading ? (
        <p>Processing your order...</p>
      ) : (
        <div>
          <h1 className="text-2xl font-bold">Payment Successful 🎉</h1>
          <p>Thank you for your purchase!</p>
        </div>
      )}
    </div>
  );
}
