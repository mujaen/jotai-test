import { useAtomValue } from 'jotai'

function Frame() {
  const time = useAtomValue(time)

  return (
    <div className="App">
      <h1>{time}</h1>
    </div>
  )
}
