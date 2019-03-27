import * as React from 'react'
import dynamic from 'next/dynamic';

const MarkdownWriter = dynamic(() => import("../src/components/markdown-writer/markdown-writer.component"), {
  ssr: false
});

export default props =>
  <div>
    <MarkdownWriter />
  </div>

