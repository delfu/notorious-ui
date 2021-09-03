import React from "react";
import { Node as SlateNode } from "slate";

import Editor from "../components/Editor/Editor";
import Surface from "../components/Surface";

export default {
  title: "Editor",
  component: Editor,
};

const initialValue: SlateNode[] = [
  {
    type: "paragraph",
    children: [
      {
        text:
          "This example shows how you can make a hovering menu appear above your content, which you can use to make text ",
      },
      { text: "bold", bold: true },
      { text: ", " },
      { text: "italic", italic: true },
      { text: ", or anything else you might want to do!" },
    ],
  },
  {
    type: "paragraph",
    children: [
      { text: "Try it out yourself! Just " },
      { text: "select any piece of text and the menu will appear", bold: true },
      { text: "." },
    ],
  },
];

export const BasicEditable = () => (
  <Surface style={{ width: 500, height: 500 }}>
    <Editor initialValue={initialValue} editable />
  </Surface>
);

export const ReadOnly = () => (
  <Surface style={{ width: 500, height: 500 }}>
    <Editor initialValue={initialValue} />
  </Surface>
);
