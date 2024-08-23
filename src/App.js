import './App.css';
import MarkdownEditor from './components/MarkdownEditor/MarkdownEditor';

function App() {
  return (
    <div className="App">
      <h1>
        Welcome to Markdown Editor
      </h1>
      <p>
        Check the Reference to find relevant Text
      </p>
      <a href='https://www.markdownguide.org/basic-syntax/' target="_blank">Click</a>
      <MarkdownEditor />
    </div>
  );
}

export default App;
