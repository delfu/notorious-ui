import React, { FC, useState, useMemo, useCallback } from "react";
import { Slate, Editable, withReact } from "slate-react";
import { Editor as SlateEditor, createEditor, Node as SlateNode } from "slate";
import { withHistory } from "slate-history";
import styled from "styled-components";

import Surface from "../Surface";
import EditorToolbar from "./Toolbar";
import { raised, palette } from "../../styles/soft";
import { toggleFormat } from "./utils";
import Leaf from "./Leaf";

export type Props = {
  initialValue: SlateNode[];
  editable?: boolean;
};

function keyboardHotkey(keyEvent: React.KeyboardEvent, editor: SlateEditor) {
  if (!keyEvent.ctrlKey && !keyEvent.metaKey) {
    return;
  }
  switch (keyEvent.key) {
    case "b":
      keyEvent.preventDefault();
      toggleFormat(editor, "bold");
      break;
    case "u":
      keyEvent.preventDefault();
      toggleFormat(editor, "underlined");
      break;
    case "i":
      keyEvent.preventDefault();
      toggleFormat(editor, "italic");
      break;
  }
}

const Container = styled(Surface)`
  display: block;
  position: relative;
  padding: 0;
  color: ${palette.black};
  ${raised}
`;

const Editor: FC<Props> = ({ initialValue, editable }) => {
  const [value, setValue] = useState<SlateNode[]>(initialValue);
  const editor = useMemo(() => withHistory(withReact(createEditor())), []);
  const hotkeyHandler = useCallback(
    (keyEvent) => keyboardHotkey(keyEvent, editor),
    [editor]
  );

  return (
    <Container>
      <Slate
        editor={editor}
        value={value}
        onChange={(value) => setValue(value)}
      >
        {editable && <EditorToolbar styles={{ position: "relative" }} />}
        <Editable
          readOnly={!editable}
          renderLeaf={(props) => <Leaf {...props} />}
          placeholder="Enter some text..."
          onKeyDown={hotkeyHandler}
          style={{ padding: 15 }}
        />
      </Slate>
    </Container>
  );
};

export default Editor;
