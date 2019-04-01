import * as React from 'react';
// @ts-ignore
import CKEditor from '@ckeditor/ckeditor5-react';
// @ts-ignore
import ClassicEditorBase from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';
// @ts-ignore
import GFMDataProcessor from '@ckeditor/ckeditor5-markdown-gfm/src/gfmdataprocessor';
// @ts-ignore
import HeadingPlugin from '@ckeditor/ckeditor5-heading/src/heading';
// @ts-ignore
import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials';
// @ts-ignore
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold';
// @ts-ignore
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic';
// @ts-ignore
import Link from '@ckeditor/ckeditor5-link/src/link';
// @ts-ignore
import List from '@ckeditor/ckeditor5-list/src/list';
// @ts-ignore
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph';
// @ts-ignore

interface Editor  {
  getData: () => string
}

interface MarkdownEditorProps {
  data?: string;
  onInit?: (event: any, editor: Editor) => void;
  onBlur?: (editor: Editor) => void;
  onChange?: (editor: Editor) => void;
  onFocus?: (editor: Editor) => void;
}

// Simple plugin which loads the data processor.
function Markdown(editor: any) {
  editor.data.processor = new GFMDataProcessor();
}

const MarkdownWriter: React.FunctionComponent<MarkdownEditorProps> = (props) => {
  return <CKEditor
      editor={ClassicEditorBase}
      config={{
        language: 'en',
        plugins: [
          Markdown,
          Essentials,
          Bold,
          Italic,
          HeadingPlugin,
          Link,
          List,
          Paragraph
        ],
        toolbar: [
          'heading',
          '|',
          'bold',
          'italic',
          'link',
          'bulletedList',
          'numberedList',
          'imageUpload',
          'pre',
          'blockQuote',
          'undo',
          'redo'
        ]
      }}
    {...props}
    />
};

export default MarkdownWriter;