import * as React from 'react'
import dynamic from 'next/dynamic';
import {CodeEditor} from "../src/components/code-editor/code-editor";

const MarkdownWriter = dynamic(() => import("../src/components/markdown-writer/markdown-writer.component"), {
  ssr: false
});

export default props =>
  <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
    <MarkdownWriter onChange={(e, editor) => console.log(editor.getData())} />
    <CodeEditor height="800px" width="90vw" />
  </div>

