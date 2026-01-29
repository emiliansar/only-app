import { useState } from 'react'
import './App.css'
import Block from './components/Block'
import { Provider } from './Provider'
import { PresContextProvider } from './context/presentation-context'

export default function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Provider>
        <PresContextProvider>
          <Block />
        </PresContextProvider>
      </Provider>
    </>
  )
}
