import React, { useState } from 'react';
import { marked } from 'marked';
import './MarkdownEditor.css';

const MarkdownEditor = () => {
  const [markdown, setMarkdown] = useState('# Welcome to Markdown Editor');

  const handleInputChange = (e) => {
    setMarkdown(e.target.value);
  };

  const getMarkdownText = () => {
    const rawMarkup = marked(markdown, { sanitize: true });
    return { __html: rawMarkup };
  };

  return (
    <div className="markdown-editor">
      <textarea
        value={markdown}
        onChange={handleInputChange}
        className="markdown-input"
        placeholder="Enter Markdown text"
      />
      <div
        className="markdown-preview"
        dangerouslySetInnerHTML={getMarkdownText()}
      />
    </div>
  );
};

export default MarkdownEditor;
