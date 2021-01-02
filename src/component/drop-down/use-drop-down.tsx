import { useState, useRef, useEffect } from "react";

export const useDropdown = ({
  items = [],
  value = "",
  placeholder = "",
  onSelect,
  onBlur: onBlurProp,
  onFocus: onFocusProp,
}: any) => {
  const [isOpened, setIsOpened] = useState(false);
  const containerRef: any = useRef(null);
  const selectedItem = items.find((item: any) => item.value === value);
  const selectedTitle = selectedItem?.title || placeholder;

  /**
   * Handle close on click outside of dropdown
   */
  const closeOnOutsideClick = () => {
    const onClickWindow = (e: any) => {
      if (!containerRef.current) {
        return;
      }

      if (containerRef.current.contains(e.target)) {
        return;
      }

      setIsOpened(false);
    };

    window.addEventListener("mousedown", onClickWindow);

    return () => {
      window.removeEventListener("mousedown", onClickWindow);
    };
  };

  const onClick = () => {
    setIsOpened(true);
  };
  const onClickItem = (item: any) => {
    setIsOpened(false);
    onSelect(item.value);
  };
  const onFocus = () => {
    if (!isOpened) {
      setIsOpened(true);
    }
    onFocusProp();
  };
  const onBlur = () => {
    if (isOpened) {
      setIsOpened(false);
    }
    onBlurProp();
  };

  useEffect(closeOnOutsideClick, []);

  return {
    selectedTitle,
    onClick,
    onFocus,
    onBlur,
    onClickItem,
    containerRef,
    isOpened,
  };
};
