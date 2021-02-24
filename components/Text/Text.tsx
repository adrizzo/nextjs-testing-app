import React from "react";

interface Props {
  children: string;
}

function Text({ children }: Props) {
  return <p>{children}</p>;
}

export default Text;
