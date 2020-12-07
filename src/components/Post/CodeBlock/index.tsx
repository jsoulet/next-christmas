import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { tomorrow } from "react-syntax-highlighter/dist/cjs/styles/prism"

const CodeBlock = ({ children, className = "", ...props }) => {
  const language = className.replace(/language-/, "")
  return (
    <SyntaxHighlighter
      language={language || "javascript"}
      style={tomorrow}
      {...props}
    >
      {children}
    </SyntaxHighlighter>
  )
}

export default CodeBlock
