import type { ReactNode } from "react";
import { Frame } from "@components/FrameWrapper/index.styled";

interface FrameWrapperProps {
  children: ReactNode;
}

export default function FrameWrapper({ children }: FrameWrapperProps) {
  return (
    <Frame className="frame" data-testid="frame-wrapper">
      {children}
    </Frame>
  );
}
