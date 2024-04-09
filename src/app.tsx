import React, { useEffect } from 'react'
import ReactDOM from 'react-dom/client'

import { Provider, atom, createStore, useAtomValue } from 'jotai'
import Frame from '#components/Frame'

const timeAtom = atom(0)
const store = createStore()

store.set(timeAtom, prev => prev + 1) // Update atom's value
store.get(timeAtom) // Read atom's value

setInterval(() => {
  // Interacting with the atom outside of React
  store.set(timeAtom, prev => prev + 1) // Update atom's value
  console.log('From store.get', store.get(timeAtom)) // Read atom's value
}, 1000)

const rootNode = document.getElementById('app')!

function Component() {
  const time = useAtomValue(timeAtom) // Inside React

  useEffect(() => {
    console.log('From useAtomValue', time)
  }, [time])

  return (
    <div className="App">
      <h1>{time}</h1>
    </div>
  )
}

ReactDOM.createRoot(rootNode).render(
  <Provider store={store}>
    <Component />
    <Frame />
  </Provider>,
)
