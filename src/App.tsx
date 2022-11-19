import { Dispatch, SetStateAction, useState } from 'react'
import reactLogo from './assets/react.svg'
import phoebe from './assets/phoebe.svg'
// import RocketShip from './assets/rocketship';
import RocketAnimation from './assets/rocketship'
import './App.css'

const App = () => {
  const [count, setCount]:[number, Dispatch<SetStateAction<number>>] = useState(0)
  const name: string = "Brange";

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <img src={phoebe} className="logo react" alt="React logo" />
      </div>
      <h1>Vite + {name}</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count += 1)}>
          count is {count}, {name}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <RocketAnimation />
    </div>
  )
}

export default App
