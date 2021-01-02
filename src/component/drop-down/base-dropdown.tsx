import React from "react";
import { useDropdown } from "./use-drop-down";
import './select-styles.css'

type searchType = {
    key: number;
    title: string;
};

type BaseDropdownType = {
    items: searchType[]
}

export const BaseDropdown = (props: BaseDropdownType) => {

    const {items = [], ...rest} = props;
    const {
        selectedTitle,
        onClick,
        onFocus,
        onBlur,
        onClickItem,
        containerRef,
        isOpened
    } = useDropdown({
        items,
        ...rest
    });

    return (
        <div
            className={'container'}
            tabIndex={0}
            onFocus={onFocus}
            onBlur={onBlur}
            ref={containerRef}
            onClick={onClick}
        >
            <div className={'dropdown'}>
                <div className={'dropdownText'}>{selectedTitle}</div>{" "}
                {/*<Chewron className={styles.chewron} />*/}
            </div>
            {isOpened && (
                <div className={'options'}>
                    {items.map((item: searchType) => (
                        <div
                            key={item.key}
                            className={'option'}
                            onClick={e => {
                                e.stopPropagation();
                                onClickItem(item);
                            }}
                        >
                            {item.title} kelo
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};
