import React, { FC, useState, ChangeEvent, useCallback } from "react";
import styled from "styled-components";
import { FaCheck } from "react-icons/fa";

import softUI, { lowered as loweredStyles } from "../styles/soft";

const Label = styled.label`
  display: block;
  position: relative;
  cursor: pointer;
  user-select: none;
  padding-left: 35px;
  text-align: left;
`;

const Input = styled.input`
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
`;

const CheckboxSpan = styled.span<{ lowered?: boolean }>`
  ${softUI}
  position: absolute;
  top: 0;
  left: 0;
  width: 2em;
  height: 2em;
  border-radius: 2em;
  font-size: 10px;
  text-align: center;
  line-height: 2.5em;
  ${(props) => props.lowered && loweredStyles}
`;

export type Props = {
  initialChecked?: boolean;
  onChange?: (event: ChangeEvent) => void;
};

const Checkbox: FC<Props> = ({ initialChecked, onChange, children }) => {
  const [isChecked, setChecked] = useState(!!initialChecked);
  const onChangeWrapper = useCallback(
    (event: ChangeEvent) => {
      const newVal = (event.target as HTMLInputElement).checked;
      setChecked(newVal);
      if (onChange) {
        onChange(event);
      }
    },
    [onChange]
  );

  return (
    <Label>
      <Input type="checkbox" onChange={onChangeWrapper} />
      <CheckboxSpan lowered={isChecked}>
        {isChecked && <FaCheck />}
      </CheckboxSpan>
      <span>{children}</span>
    </Label>
  );
};

export default Checkbox;
