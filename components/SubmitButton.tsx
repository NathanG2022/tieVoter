"use client"

import { useState } from "react"
import { Button } from "./ui/button"
import { Input } from "./ui/input"

const SubmitButton = () => {
  const [input, setInput] = useState("")

  return (
    <div className="mt-12 flex flex-col gap-2">
      <div className="flex gap-2">
        <Input
          value={input}
          onChange={({ target }) => setInput(target.value)}
        />
        <Button>Create</Button>
      </div>
    </div>
  )
}

export default SubmitButton