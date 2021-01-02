import React from "react";

interface TextProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement> {
    children?: any;
}

export const Text = (props: TextProps) => {
    const {children, ...rest} = props;
    return (
        <p {...rest} style={{margin: 0}}>
            {children}
        </p>
    )
};
