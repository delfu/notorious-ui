import React, { FC, CSSProperties } from "react";
import styled from "styled-components";
import { FaBold, FaItalic, FaUnderline } from "react-icons/fa";

import ToolbarButton from "./ToolbarButton";
import Surface from "../Surface";
import { palette } from "../../styles/soft";

export const EditorSurface = styled(Surface)`
  z-index: 1;
  transition: opacity 0.75s;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  border-bottom: 2px solid;
  border-bottom-color: ${palette.dark};
`;

export type Props = {
  className?: string;
  style?: CSSProperties;
};

const EditorToolbar: FC<Props> = ({ className, style }) => {
  return (
    <EditorSurface className={className} style={style}>
      <ToolbarButton format="bold" icon={<FaBold />} />
      <ToolbarButton format="italic" icon={<FaItalic />} />
      <ToolbarButton format="underlined" icon={<FaUnderline />} />
    </EditorSurface>
  );
};
export default EditorToolbar;
