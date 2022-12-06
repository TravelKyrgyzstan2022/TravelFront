import { useRef } from "react";
import styled from "styled-components";
import { useButton } from "@react-aria/button";
import { useFocusRing } from "@react-aria/focus";
import { mergeProps } from "@react-aria/utils";

    const StyledButton = styled.button`
    appearance: none;
    border: none;
    background: none;
    color: black;
    height: 40px;
    width: 40px;
    border-radius: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    outline: none;
    box-shadow: ${(props) => (props.isFocusVisible ? "0 0 0 2px seagreen" : "")};

    &:hover {
        background: rgba(46, 139, 87, 0.2);
    }

    &:active {
        background: rgba(46, 139, 87, 0.5);
    }
    `;

    export function CalendarButton(props) {
    let ref = useRef();
    let { buttonProps } = useButton(props, ref);
    let { focusProps, isFocusVisible } = useFocusRing();
    return (
        <StyledButton
        {...mergeProps(buttonProps, focusProps)}
        isFocusVisible={isFocusVisible}
        ref={ref}
        >
        {props.children}
        </StyledButton>
    );
    }
