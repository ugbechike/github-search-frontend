import React from "react";
import { cx } from "@emotion/css";
import { loader, textLoader } from "../skeleton-loader/styles";
import * as styles from "./styles";


export const UserCardLoading = () => (
    <div className={styles.container}>
        <div className={styles.user}>
            <div className={cx([styles.avatarImage, loader])} />
            <div>
                <div className={cx([textLoader("120px")])} />
                <div className={textLoader("180px")} />
                <div className={cx([textLoader("120px")])} />

            </div>
        </div>
        <div className={cx([textLoader("120px"), styles.footerLoader])} />
        <div className={cx([textLoader("120px"), styles.footerLoader])} />
    </div>
);
