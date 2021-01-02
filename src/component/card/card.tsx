import React, { ReactNode } from "react";
import { Box } from "../base/box";
import './card-styles.css';

type CardPropsType = {
  children: ReactNode;
};
export const Card = (props: CardPropsType) => {
  const { children } = props;

  return <Box className={'card-container'}>{children}</Box>;
};
