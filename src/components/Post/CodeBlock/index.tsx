import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { tomorrow } from "react-syntax-highlighter/dist/cjs/styles/prism"

const CodeBlock = ({ children }) => {
  return (
    <SyntaxHighlighter language="javascript" style={tomorrow}>
      {children}
    </SyntaxHighlighter>
  )
}

export default CodeBlock
