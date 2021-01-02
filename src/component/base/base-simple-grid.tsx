import React, { ReactNode } from "react";
import './base-styles.css'

type BaseSimpleGridProps = {
  children: ReactNode;
};

export const BaseSimpleGrid = (props: BaseSimpleGridProps) => {
  const { children } = props;

  return <div className={'grid-container'}>{children}</div>;
};
