import React, {KeyboardEvent, useEffect, useState} from 'react';
import s from "./Select.module.css"


type ItemType = {
    title: string
    value: string
}

type SelectPropsType = {
    value: string
    callBack: (value: string) => void
    items: ItemType[]
}

export const Select = (props: SelectPropsType) => {

    const [active, setActive] = useState(false)
    const [hoveredElement, setHoveredElement] = useState(props.value)

    useEffect(() => {
        setHoveredElement(props.value)
    }, [props.value])

    // const selectedItems = props.items.filter(el => el.value === props.value);
    //  const itemClicked = (value: any) => props.callBack(value) перенёс вниз
    const selectedItems = props.items.find(el => el.value === props.value);
    const hoveredItem = props.items.find(el => el.value === hoveredElement);

    const toggleItems = () => {
        setActive(!active)
    }

    const onItemClick = (value: any) => {
        props.callBack(value);
        toggleItems()
    }

    const onKeyUpHandler = (e: KeyboardEvent<HTMLDivElement>) => {
        if (e.key === "ArrowDown" || e.key === "ArrowUp") {
            for (let i = 0; i < props.items.length; i++) {
                if (props.items[i].value === hoveredElement) {
                    const pretendentElement = e.key === "ArrowDown"
                        ? props.items[i + 1]
                        : props.items[i - 1]

                    if (pretendentElement) {
                        props.callBack(pretendentElement.value)
                        return
                    }
                    // props.callBack(props.items[i+1].value)
                    // setHoveredElement(props.items[i+1].value)

                }
            }
            if (!selectedItems) {
                props.callBack(props.items[0].value)
            }
        }
        if (e.key === "Enter" || e.key === "Escape") {
            setActive(false)
        }
    }

    return (
        <>
            <div className={s.select} onKeyUp={onKeyUpHandler} tabIndex={0}>
                <span className={s.main} onClick={toggleItems}>
                    {selectedItems && selectedItems.title}
                </span>
                {
                    active &&
                    <div className={s.items}>
                        {props.items.map(el =>
                            <div
                                onMouseEnter={() => {
                                    setHoveredElement(el.value)
                                }}
                                className={s.item + " " + (hoveredItem === el ? s.selected : "")}
                                key={el.value}
                                onClick={() => {
                                    onItemClick(el.value)
                                }}
                            >{el.title}
                            </div>)}
                    </div>
                }
            </div>
        </>
    )
}

