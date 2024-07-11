// App.tsx:
import React, { useState } from "react"
import Example from "./components/Example"

const App: React.FC = () => {
  const [message] = useState("Hello world")
  return (
    <div>
      <h1 className="text-3xl font-semibold">{message}</h1>
      <Example />
    </div>
  )
}

export default App
