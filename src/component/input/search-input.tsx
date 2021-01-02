import React, {ChangeEventHandler, FocusEventHandler} from "react";
import './input-styles.css';


interface SearchInputProps extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    value: string,
    placeholder: string,
    onBlur: FocusEventHandler<HTMLInputElement>
    onFocus: FocusEventHandler<HTMLInputElement>
    onChange: ChangeEventHandler<HTMLInputElement>
}

export const SearchInput = (props: SearchInputProps) => {
    const {onChange, onFocus, onBlur, value, placeholder, ...rest} = props;
    return (
      <input
          {...rest}
          className={'input'}
          placeholder={placeholder}
          type="text"
          value={value}
          autoComplete={'off'}
          onBlur={onBlur}
          onFocus={onFocus}
          onChange={onChange}
      />
    )
};
