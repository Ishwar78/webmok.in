import React, { useState, useRef, useEffect } from 'react';
import {
  FaBold,
  FaItalic,
  FaUnderline,
  FaStrikethrough,
  FaHeading,
  FaListUl,
  FaListOl,
  FaQuoteLeft,
  FaCode,
  FaLink,
  FaUnlink,
  FaImage,
  FaAlignLeft,
  FaAlignCenter,
  FaAlignRight,
  FaUndo,
  FaRedo,
  FaEraser,
  FaEye,
  FaFileCode
} from 'react-icons/fa';
import './RichTextEditor.css';

const RichTextEditor = ({ value = '', onChange, placeholder = 'Write your article content here...' }) => {
  const [isHtmlMode, setIsHtmlMode] = useState(false);
  const [htmlCode, setHtmlCode] = useState(value);
  const editorRef = useRef(null);

  // Sync incoming value to editor
  useEffect(() => {
    if (editorRef.current && !isHtmlMode) {
      if (editorRef.current.innerHTML !== value) {
        editorRef.current.innerHTML = value || '';
      }
    }
    setHtmlCode(value || '');
  }, [value, isHtmlMode]);

  const handleExec = (command, val = null) => {
    if (isHtmlMode) return;
    document.execCommand(command, false, val);
    if (editorRef.current) {
      editorRef.current.focus();
      triggerChange();
    }
  };

  const triggerChange = () => {
    if (editorRef.current) {
      const newHtml = editorRef.current.innerHTML;
      setHtmlCode(newHtml);
      if (onChange) {
        onChange(newHtml);
      }
    }
  };

  const handleInput = () => {
    triggerChange();
  };

  const handleHtmlCodeChange = (e) => {
    const newHtml = e.target.value;
    setHtmlCode(newHtml);
    if (onChange) {
      onChange(newHtml);
    }
  };

  const handleInsertLink = () => {
    if (isHtmlMode) return;
    const url = prompt('Enter destination URL (e.g. https://webmok.in):', 'https://');
    if (url && url !== 'https://') {
      handleExec('createLink', url);
    }
  };

  const handleInsertImage = () => {
    if (isHtmlMode) return;
    const url = prompt('Enter Image URL (e.g. https://images.unsplash.com/...):');
    if (url) {
      handleExec('insertImage', url);
    }
  };

  const handleHeadingChange = (e) => {
    const heading = e.target.value;
    if (!heading) {
      handleExec('formatBlock', '<p>');
    } else {
      handleExec('formatBlock', '<' + heading + '>');
    }
  };

  return (
    <div className="wm-rich-editor-wrapper">
      {/* Toolbar */}
      <div className="wm-rich-toolbar">
        {/* Headings Selector */}
        <select
          className="wm-rich-select"
          onChange={handleHeadingChange}
          defaultValue=""
          disabled={isHtmlMode}
          title="Format Paragraph / Heading"
        >
          <option value="">Normal Text</option>
          <option value="h2">Heading 2 (H2)</option>
          <option value="h3">Heading 3 (H3)</option>
          <option value="h4">Heading 4 (H4)</option>
          <option value="blockquote">Quote Block</option>
        </select>

        <div className="wm-rich-divider" />

        {/* Text Style */}
        <button
          type="button"
          className="wm-rich-btn"
          onClick={() => handleExec('bold')}
          title="Bold (Ctrl+B)"
          disabled={isHtmlMode}
        >
          <FaBold />
        </button>
        <button
          type="button"
          className="wm-rich-btn"
          onClick={() => handleExec('italic')}
          title="Italic (Ctrl+I)"
          disabled={isHtmlMode}
        >
          <FaItalic />
        </button>
        <button
          type="button"
          className="wm-rich-btn"
          onClick={() => handleExec('underline')}
          title="Underline (Ctrl+U)"
          disabled={isHtmlMode}
        >
          <FaUnderline />
        </button>
        <button
          type="button"
          className="wm-rich-btn"
          onClick={() => handleExec('strikeThrough')}
          title="Strikethrough"
          disabled={isHtmlMode}
        >
          <FaStrikethrough />
        </button>

        <div className="wm-rich-divider" />

        {/* Lists */}
        <button
          type="button"
          className="wm-rich-btn"
          onClick={() => handleExec('insertUnorderedList')}
          title="Bullet List"
          disabled={isHtmlMode}
        >
          <FaListUl />
        </button>
        <button
          type="button"
          className="wm-rich-btn"
          onClick={() => handleExec('insertOrderedList')}
          title="Numbered List"
          disabled={isHtmlMode}
        >
          <FaListOl />
        </button>

        <div className="wm-rich-divider" />

        {/* Alignment */}
        <button
          type="button"
          className="wm-rich-btn"
          onClick={() => handleExec('justifyLeft')}
          title="Align Left"
          disabled={isHtmlMode}
        >
          <FaAlignLeft />
        </button>
        <button
          type="button"
          className="wm-rich-btn"
          onClick={() => handleExec('justifyCenter')}
          title="Align Center"
          disabled={isHtmlMode}
        >
          <FaAlignCenter />
        </button>
        <button
          type="button"
          className="wm-rich-btn"
          onClick={() => handleExec('justifyRight')}
          title="Align Right"
          disabled={isHtmlMode}
        >
          <FaAlignRight />
        </button>

        <div className="wm-rich-divider" />

        {/* Insert Media & Links */}
        <button
          type="button"
          className="wm-rich-btn"
          onClick={handleInsertLink}
          title="Insert Link"
          disabled={isHtmlMode}
        >
          <FaLink />
        </button>
        <button
          type="button"
          className="wm-rich-btn"
          onClick={() => handleExec('unlink')}
          title="Remove Link"
          disabled={isHtmlMode}
        >
          <FaUnlink />
        </button>
        <button
          type="button"
          className="wm-rich-btn"
          onClick={handleInsertImage}
          title="Insert Image URL"
          disabled={isHtmlMode}
        >
          <FaImage />
        </button>

        <div className="wm-rich-divider" />

        {/* History & Clean */}
        <button
          type="button"
          className="wm-rich-btn"
          onClick={() => handleExec('undo')}
          title="Undo"
          disabled={isHtmlMode}
        >
          <FaUndo />
        </button>
        <button
          type="button"
          className="wm-rich-btn"
          onClick={() => handleExec('redo')}
          title="Redo"
          disabled={isHtmlMode}
        >
          <FaRedo />
        </button>
        <button
          type="button"
          className="wm-rich-btn"
          onClick={() => handleExec('removeFormat')}
          title="Clear Formatting"
          disabled={isHtmlMode}
        >
          <FaEraser />
        </button>

        {/* Right Action: HTML Mode Toggle */}
        <div className="wm-rich-toolbar-right">
          <button
            type="button"
            className={'wm-rich-btn wm-rich-html-toggle ' + (isHtmlMode ? 'active' : '')}
            onClick={() => setIsHtmlMode(!isHtmlMode)}
            title={isHtmlMode ? 'Switch to Visual WYSIWYG Mode' : 'Switch to Raw HTML Code Mode'}
          >
            {isHtmlMode ? <><FaEye /> Visual Mode</> : <><FaFileCode /> HTML Code</>}
          </button>
        </div>
      </div>

      {/* Editor Body */}
      {isHtmlMode ? (
        <textarea
          className="wm-rich-textarea"
          value={htmlCode}
          onChange={handleHtmlCodeChange}
          placeholder="<p>Enter raw HTML markup here...</p>"
          rows={12}
        />
      ) : (
        <div
          ref={editorRef}
          className="wm-rich-editable"
          contentEditable
          onInput={handleInput}
          onBlur={triggerChange}
          data-placeholder={placeholder}
          suppressContentEditableWarning={true}
        />
      )}
    </div>
  );
};

export default RichTextEditor;
