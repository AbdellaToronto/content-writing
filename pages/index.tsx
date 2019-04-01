import * as React from 'react'
import dynamic from 'next/dynamic';
import {CodeEditor} from "../src/components/code-editor/code-editor";
import {TextField} from "@material-ui/core";
import {connect} from "react-redux";
import {genericActionCreator} from "../src/redux/common";
import {TOPIC_TYPES} from "../src/redux/actions.types";

const MarkdownWriter = dynamic(() => import("../src/components/markdown-writer/markdown-writer.component"), {
  ssr: false
});

export default connect(state => state, { saveDraft: genericActionCreator(TOPIC_TYPES.UPDATE_TOPIC_DRAFT) })(({saveDraft}) =>
  <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
    <MarkdownWriter onChange={(e, editor) => console.log(editor.getData())} />
    <TextField style={{width: '250px'}} label="Comma Separate Goals" onChange={(e) => console.log(e.target.value.split(',').map(label => label.trim()))} />
    <CodeEditor height="800px" width="90vw" />
    <TextField style={{width: '250px'}} label="Repo/Sandbox URL" onChange={(e) => e.target.value} />
  </div>)

