import { useState } from 'react'

// import "../public/sass/_base.scss"
import './App.css'
import MultiStepRegister from './components/Register/MultiStepRegister'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Hello Sass Learn</h1>
      <MultiStepRegister />
    </>
  )
}

export default App
