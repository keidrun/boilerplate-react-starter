import React, { useState } from 'react'
import { hot } from 'react-hot-loader/root'
import './App.css'

type Props = {
  initialCount: number,
}

function App({ initialCount }: Props) {
  const [count, setCount] = useState(initialCount)

  return (
    <div className="App" data-test="component-app">
      <header className="App-header">
        <p>My React App without Create React App!</p>
        <p>Count: {count}</p>
        <div>
          <button type="button" onClick={() => setCount(count + 1)}>
            +1
          </button>
          <button type="button" onClick={() => setCount(count - 1)}>
            -1
          </button>
          <button type="button" onClick={() => setCount(initialCount)}>
            clear
          </button>
        </div>
      </header>
    </div>
  )
}

App.defaultProps = {
  initialCount: 0,
}

export default hot(App)
