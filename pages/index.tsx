import * as React from 'react'
import dynamic from 'next/dynamic';
import {CodeEditor} from "../src/components/code-editor/code-editor";
import {TextField} from "@material-ui/core";
import {connect} from "react-redux";
import {genericActionCreator} from "../src/redux/common";
import {TOPIC_TYPES} from "../src/redux/actions.types";
import { Field, reduxForm } from 'redux-form';
import Button from "@material-ui/core/Button";

  const MUIReduxField = ({
                             label,
                             input,
                             meta: { touched, invalid, error },
                             transformChange = null,
                             ...custom
                           }) => (
  <TextField
    label={label}
    placeholder={label}
    error={touched && invalid}
    helperText={touched && error}
    {...input}
    {...custom}
    {...(transformChange ? { onChange: (e) => input.onChange(transformChange(e)) }: {})}
  />
);


const MarkdownWriter = dynamic(() => import("../src/components/markdown-writer/markdown-writer.component"), {
  ssr: false
});

const ReduxFormMarkdownWriter = ({input: {onChange}}) => <MarkdownWriter onChange={(e, editor) => onChange(editor.getData())} />;


const EditDraftForm = reduxForm({
  // a unique name for the form
  form: 'editDraft'
})(({handleSubmit}) => <form onSubmit={handleSubmit}>
  <Field name="mdContent" component={ReduxFormMarkdownWriter} />
  <Field  name="tags" style={{width: '250px'}} label="Comma Separate Goals" component={MUIReduxField} transformChange={e => e.target.value.split(',').map(label => label.trim())} />
  <CodeEditor height="800px" width="90vw" />
  <Field name="exerciseLink" style={{width: '250px'}} label="Repo/Sandbox URL" component={MUIReduxField} />
  <Button type="submit">Submit</Button>
</form>);

export default connect(state => state, { saveDraft: genericActionCreator(TOPIC_TYPES.UPDATE_TOPIC_DRAFT) })(({saveDraft}) =>
  <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
    <EditDraftForm onSubmit={saveDraft} />
  </div>)

