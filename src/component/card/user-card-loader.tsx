import {Box} from "../base/box";
import {UserCardLoading} from "../loader/user-card-loader";
import {BaseSimpleGrid} from "../base/base-simple-grid";
import React from "react";

export const UserCardLoader = () => {
  return (
    <BaseSimpleGrid>
      {Array.from(Array(6).keys()).map((e: number) => {
        return (
          <Box key={e}>
            <UserCardLoading />
          </Box>
        );
      })}
    </BaseSimpleGrid>
  );
};
