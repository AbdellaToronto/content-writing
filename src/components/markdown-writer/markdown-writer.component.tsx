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
import ImageCaption from '@ckeditor/ckeditor5-image/src/imagecaption';
// @ts-ignore
import ImageStyle from '@ckeditor/ckeditor5-image/src/imagestyle';
// @ts-ignore
import ImageToolbar from '@ckeditor/ckeditor5-image/src/imagetoolbar';
// @ts-ignore
import Image from '@ckeditor/ckeditor5-image/src/image';
// @ts-ignore
import ImageUpload from '@ckeditor/ckeditor5-image/src/imageupload';
// @ts-ignore
import Link from '@ckeditor/ckeditor5-link/src/link';
// @ts-ignore
import List from '@ckeditor/ckeditor5-list/src/list';
// @ts-ignore
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph';
// @ts-ignore


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
          HeadingPlugin,
          Image,
          ImageCaption,
          ImageStyle,
          ImageToolbar,
          ImageUpload,
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
        ],
        image: {
          toolbar: [
            'imageStyle:full',
            'imageStyle:side',
            '|',
            'imageTextAlternative'
          ]
        },
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