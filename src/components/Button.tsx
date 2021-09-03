import React, { FC, useState, useCallback, MouseEvent } from "react";
import styled from "styled-components";

import softUI, { lowered } from "../styles/soft";

export const ButtonStyled = styled.button<{
  pressed?: boolean;
  square?: boolean;
}>`
  border-radius: ${(props) => (props.square ? "0.5em" : "1em")};
  border: 0;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5em;
  white-space: nowrap;
  margin: 0.5em;
  &:disabled {
    cursor: not-allowed;
  }
  &:active {
    color: grey;
  }
  ${softUI};
  ${(props) => props.pressed && lowered}
`;

export type Props = {
  stateful?: boolean;
  state?: PressedState;
  disabled?: boolean;
  onClick?: (event: ButtonPressEvent) => void;
  square?: boolean;
};

export enum PressedState {
  NotPressed,
  Pressed,
}

export type ButtonPressEvent = MouseEvent & {
  value: PressedState;
};

const Button: FC<Props> = ({
  stateful,
  state,
  disabled,
  onClick,
  square,
  children,
}) => {
  const [pressedState, setPressedState] = useState(
    state || PressedState.NotPressed
  );
  const onClickWrapper = useCallback(
    (event: MouseEvent) => {
      const newVal =
        pressedState === PressedState.Pressed
          ? PressedState.NotPressed
          : PressedState.Pressed;
      if (onClick) {
        onClick({ ...event, value: newVal });
      }
      if (stateful) {
        setPressedState(newVal);
      }
    },
    [stateful, pressedState, onClick]
  );

  return (
    <ButtonStyled
      disabled={disabled}
      pressed={pressedState === PressedState.Pressed}
      square={square}
      onClick={onClickWrapper}
    >
      {children}
    </ButtonStyled>
  );
};

export default Button;
