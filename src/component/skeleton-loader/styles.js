import { keyframes, css } from "@emotion/css";

const placeHolderShimmer = keyframes({
    "0%": {
        backgroundPosition: "-29.25rem 0"
    },
    "100%": {
        backgroundPosition: "29.25rem 0"
    }
});

export const loaderCss = {
    animationDuration: "1s",
    animationFillMode: "forwards",
    animationIterationCount: "infinite",
    animationName: placeHolderShimmer,
    animationTimingFunction: "linear",
    background: "linear-gradient(to right, #ecf0f1 8%, #bdc3c7 18%, #ecf0f1 33%)",
    backgroundSize: "50rem 6.5rem"
};

export const loader = css(loaderCss);
export const textLoader = width =>
    css({
        ...loaderCss,
        margin: "6px 0",
        borderRadius: "5px",
        height: "10px",
        width
    });
