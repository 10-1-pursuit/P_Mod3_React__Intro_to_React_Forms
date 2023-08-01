import { useState } from 'react'

import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import './App.css'


import MostFormInputs from './Components/MostFormInputs.jsx'
import FormCheckBoxExamples from './Components/FormCheckBoxExamples.jsx'
import FormDropDownExamples from './Components/FormDropDownExamples.jsx'




function App() {




  return (
    <>
      <div id='logoz'>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      <h1>Intro to React Forms</h1>


      {/* Dropdown */}
      <FormDropDownExamples />



      {/* Single Input */}


      {/* Multi Input */}

      {/* Multi Input - 1 State */}




      {/* Checkbox */}
      {/* <FormCheckBoxExamples /> */}


      {/* <MostFormInputs /> */}


    </>
  )
}

export default App

