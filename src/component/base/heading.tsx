import React from "react";

interface HeadingProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement> {
    children?: any;
}

export const Heading = (props: HeadingProps) => {
    const {children, ...rest} = props;
    return (
        <h2 {...rest}>
            {children}
        </h2>
    )
};
