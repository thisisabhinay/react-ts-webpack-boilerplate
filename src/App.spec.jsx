import { render } from "@testing-library/react"
import React from "react"
import App from "./App.tsx"

describe("App", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<App />)
    expect(baseElement).toBeTruthy()
  })
})
