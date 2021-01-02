import React, { FocusEventHandler } from "react";
import "./select-styles.css";

type option = {
  key: number;
  title: string;
};

interface BaseSelectProps {
  onBlur: FocusEventHandler<any>;
  onFocus: FocusEventHandler<any>;
  onChange: any;
    options: option[];
}

export const BaseSelect = (props: BaseSelectProps) => {
  const { onFocus, onBlur, onChange, options } = props;
  return (
    <div className="select">
      <select
        // className={"select"}
        // onBlur={onBlur}
        // onFocus={onFocus}
        onChange={onChange}
      >
        {options?.map((value, index) => {
          return (
            <option style={{position: 'relative'}} key={index}>
              {value.title}
            </option>
          );
        })}
      </select>
    </div>
  );
};
