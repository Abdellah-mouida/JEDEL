// types/classic.d.ts
declare module "react-toggle" {
  import React from "react";

  export interface ClassicToggleProps {
    toggled: boolean;
    toggle: () => void;
    className?: string;
    "aria-label"?: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [key: string]: any; // Allow any other props
  }

  export const Classic: React.FC<ClassicToggleProps>;
}
