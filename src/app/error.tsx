"use client";

import ErrorIcon from "@/assets/CrossIcon";
import { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`
@media (max-width: 376px) {
  .svg-x {
    height: 40px;
    width: 40px;
  }
  h1 {
    font-size: 1em;
  }
}

`;

export default function Fallback() {
  return (
    <>
      <Global />
      <main>
        <ErrorIcon />
        <h1>
          Oops...
          <br /> Something bad has just happened
        </h1>
      </main>
    </>
  );
}
