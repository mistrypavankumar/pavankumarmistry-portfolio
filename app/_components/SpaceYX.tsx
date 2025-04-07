import clsx from "clsx";
import React from "react";

function SpaceYX({ x, y }: { x: number; y: number }) {
  return <div className={clsx("my-0 mx-0", x ?? x, y ?? y)} />;
}

export default SpaceYX;
