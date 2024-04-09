import React from 'react'
import { useAtomValue, atom } from 'jotai'

function Frame() {
  const timeAtom = atom(0)
  const time = useAtomValue(timeAtom)

  return (
    <div className="App">
      <h1>{time}tiems </h1>
    </div>
  )
}

export default Frame
