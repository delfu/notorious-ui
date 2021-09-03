import React, { FC, useEffect, useState } from "react";
import styled from "styled-components";

import { palette } from "../styles/soft";

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
const CheckboxSpan = styled.span<{ checked?: boolean }>`
  box-shadow: ${` 0.3em 0.3em 0.3em rgba(0,0,0,0.2) inset, -0.1em -0.1em 0.3em  ${palette.bright} inset`};
  position: absolute;
  top: 0;
  left: 0;
  width: 4em;
  height: 2em;
  border-radius: 2em;
  font-size: 10px;
  text-align: center;
  line-height: 2.5em;
  background-color: ${(props) => (props.checked ? palette.primary : "inherit")};
  transition: background-color 0.1s ease-out;

  &:after {
    content: " ";
    width: 2em;
    height: 2em;
    border-radius: 2em;
    box-shadow: ${`0.25em 0.25em 0.2em rgba(0,0,0,0.2)`};
    background: ${palette.grey};
    position: absolute;
    transition: transform 0.2s ease-out;
    transform: ${(props) =>
      props.checked ? "translateX(0)" : "translateX(-100%)"};
  }
`;

export type Props = {
  checked?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => {};
};

const Switch: FC<Props> = ({ checked: checkedProp, onChange, children }) => {
  const [checked, setChecked] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(event);
    }
    setChecked(event.target.checked);
  };

  useEffect(() => {
    setChecked(!!checkedProp);
  }, [checkedProp]);

  return (
    <Label>
      <Input type="checkbox" onChange={handleChange} />
      <CheckboxSpan checked={checked}></CheckboxSpan>
      <span>{children}</span>
    </Label>
  );
};

export default Switch;
