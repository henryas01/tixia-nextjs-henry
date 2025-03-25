// "use client";
import React, { PropsWithChildren } from "react";

const LayoutComponent = ({ children }: PropsWithChildren) => {
  return <section>{children}</section>;
};

export default LayoutComponent;
