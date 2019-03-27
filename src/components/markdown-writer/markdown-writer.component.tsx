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


// Simple plugin which loads the data processor.
function Markdown(editor: any) {
  editor.data.processor = new GFMDataProcessor();
}

export default () => {
  return <CKEditor
      editor={ClassicEditorBase}
      config={{
        language: 'en',
        plugins: [
          Markdown,
          Essentials,
          Bold,
          Italic,
          HeadingPlugin
        ],
        toolbar: ['heading', '|', 'bold', 'italic'],
      }}
      data="Hello"
      onInit={(editor: any) => {
        // You can store the "editor" and use when it is needed.
        console.log('Editor is ready to use!', editor);
      }}
      onChange={(event: any, editor: any) => {
        const data = editor.getData();
        ;
        console.log({event, editor, data});
      }}
      onBlur={(editor: any) => {
        console.log('Blur.', editor);
      }}
      onFocus={(editor: any) => {
        console.log('Focus.', editor);
      }}
    />
};