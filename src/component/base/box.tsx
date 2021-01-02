import React from "react";

interface BoxProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    children?: any;
}

export const Box = (props: BoxProps) => {
    const {children, ...rest} = props;
    return (
        <div {...rest}>
            {children}
        </div>
    )
};
