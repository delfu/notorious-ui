import React, { FC, ReactNode } from "react";
import { useSlate } from "slate-react";
import styled from "styled-components";

import { Format, isFormatActive, toggleFormat } from "./utils";
import { palette } from "../../styles/soft";

export const Container = styled.span<{ active?: boolean }>`
  cursor: pointer;
  margin-right: 10px;
  color: ${(props) => (props.active ? palette.primary : "#aaa")};
`;

type FormatButtonProps = {
  format: Format;
  icon: ReactNode;
};

const FormatButton: FC<FormatButtonProps> = ({ format, icon }) => {
  const editor = useSlate();
  const active = isFormatActive(editor, format);
  return (
    <Container
      onMouseDown={(event) => {
        event.preventDefault();
        toggleFormat(editor, format);
      }}
      active={active}
    >
      {icon}
    </Container>
  );
};

export default FormatButton;
