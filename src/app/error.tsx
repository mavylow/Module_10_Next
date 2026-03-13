"use client";

import ErrorIcon from "@/assets/CrossIcon";

export default function Fallback() {
  return (
    <>
      <main className="error-page">
        <ErrorIcon />
        <h1>
          Oops...
          <br /> Something bad has just happened
        </h1>
      </main>
    </>
  );
}
