// import { css } from "@emotion/css";
import { css } from '@emotion/css'
// import { css } from '@emotion/react'

export const container = css({
    // marginTop: "20px",
    display: "flex",
    flexDirection: "column",
    border: ".0625rem solid #bdc3c7",
    borderRadius: ".25rem",
    padding: "16px",
    minHeight: "60px",
    margin: "10px",
    minWidth: "300px"
});

export const link = css({
    textDecoration: "none",
    color: "#3498db",
    fontWeight: "bold",
    wordBreak: "break-word",
    marginBottom: "3px"
});

export const user = css({
    display: "inline-flex",
    color: "inherit",
    textDecoration: "none",
    alignItems: "center",
    lineHeight: 1.58,
    flex: 1
});

export const avatarImage = css({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "42px",
    height: "42px",
    borderRadius: "21px",
    overflow: "hidden",
    marginRight: "6px",
    "& img": {
        width: "100%"
    },
    flexShrink: 0
});

export const description = css({
    fontSize: "14px",
    color: "#7f8c8d"
});

export const name = css({
    fontWeight: "bold"
});

export const footer = css({
    display: "flex",
    paddingTop: "12px",
    alignItems: "center",
    justifyContent: "space-between"
});

export const footerLoader = css({
    marginTop: "12px"
});

export const info = css({
    fontSize: "12px",
    color: "#7f8c8d"
});

export const badge = css({
    backgroundColor: "#ecf0f1",
    borderRadius: "8px",
    padding: "0 6px",
    fontWeight: "bold",
    display: "inline-flex",
    justifyContent: "center",
    alignItems: "center",
    height: "16px",
    lineHeight: 0
});
