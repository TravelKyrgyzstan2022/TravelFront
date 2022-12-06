import { useRef } from "react";
import styled from "styled-components";
import { useCalendarCell } from "@react-aria/calendar";
import { useDateFormatter } from "@react-aria/i18n";
import { useFocusRing } from "@react-aria/focus";
import { mergeProps } from "@react-aria/utils";

    const Button = styled.span`
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: default;
    height: 40px;
    width: 40px;
    border-radius: 100%;
    background: ${(props) => (props.isSelected ? "seagreen" : "")};
    color: ${(props) => (props.isSelected ? "white" : "")};
    outline: none;
    position: relative;

    &:hover {
        background: ${(props) =>
        props.isSelected ? "seagreen" : "rgba(46, 139, 87, 0.2)"};
    }

    &:after {
        content: "";
        position: absolute;
        inset: -2px;
        border-radius: 100%;
        box-shadow: ${(props) =>
        props.isFocusVisible ? "0 0 0 2px seagreen" : ""};
    }
    `;

    export function CalendarCell(props) {
    let ref = useRef();
    let { cellProps, buttonProps } = useCalendarCell(props, props.state, ref);

    let dateFormatter = useDateFormatter({
        day: "numeric",
        timeZone: props.state.timeZone,
        calendar: props.date.calendar.identifier
    });

    let isSelected = props.state.isSelected(props.date);
    let { focusProps, isFocusVisible } = useFocusRing();

    return (
        <td {...cellProps}>
        <Button
            ref={ref}
            {...mergeProps(buttonProps, focusProps)}
            isSelected={isSelected}
            isFocusVisible={isFocusVisible}
        >
            {dateFormatter.format(props.date.toDate(props.state.timeZone))}
        </Button>
        </td>
    );
    }
