import { useState } from "react";

const FunctionNoop = ( ) => {
    return;
};

export const useFocus = ({handleFocus: onFocus = FunctionNoop, handleBlur: onBlur = FunctionNoop}: any = {}) => {
    const [isFocused, setIsFocused] = useState(false);
    const handleFocus = (e: any) => {
        setIsFocused(true);
        onFocus(e);
    };
    const handleBlur = (e: any) => {
        setIsFocused(false);
        onBlur(e);
    };

    return {
        isFocused,
        handleFocus,
        handleBlur
    };
};
