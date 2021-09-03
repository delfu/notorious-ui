import { Editor as SlateEditor, Transforms, Text } from 'slate'

export type Format = 'bold' | 'italic' | 'underlined'

// Supported formats
export const toggleFormat = (editor: SlateEditor, format: Format) => {
  const isActive = isFormatActive(editor, format)
  Transforms.setNodes(
    editor,
    { [format]: isActive ? null : true },
    { match: Text.isText, split: true }
  )
}
export const isFormatActive = (editor: SlateEditor, format: Format) => {
  const matches = SlateEditor.nodes(editor, {
    match: n => n[format] === true,
    mode: 'all',
  })
  return Array.from(matches).length > 0
}
