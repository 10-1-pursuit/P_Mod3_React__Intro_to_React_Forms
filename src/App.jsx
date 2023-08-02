import { useState } from 'react'

import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import './App.css'


import MostFormInputs from './Components/MostFormInputs.jsx'

import FormCheckBoxExamples from './Components/FormCheckBoxExamples.jsx'
import FormDropDownExamples from './Components/FormDropDownExamples.jsx'
import FormTextInputExamples from './Components/FormTextInputExamples.jsx'



function App() {

  //// Keep You State Closest To the Component(S) That Need It/Them
  /* 
  
    "Lowest Common Anscestor"
    ♾
    <Parent />
      <Child /><Child />
        ♾

  */



  const [newFellowName, setNewFellowName] = useState( "" )
    console.log( "STATE OF  newFellowName:" , newFellowName )

  const [showTypedTextAfterSubmit, setShowTypedTextAfterSubmit] = useState(false)
  // Here to facilitate Conditional Rendering


  


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


      {/* Note to Self (Sam - Lol) : Opportinuty for some Inverse DataFlow */}
      {
        // condition/question ?                         true : false
        showTypedTextAfterSubmit ?  <h2>{newFellowName}</h2> : <></>
      }


      {/* THIS IS A COMMENT: Single Input */}
        {/* FormTextInputExamples */}

      <FormTextInputExamples  

        // [v, f]
          // showTypedTextAfterSubmitFromApp={showTypedTextAfterSubmit} 
        showTheTextFunction={setShowTypedTextAfterSubmit} 

        // [v, f]
        newFellowName={newFellowName}
        setNewFellowName={setNewFellowName}
        
      />




      {/* THIS IS A COMMENT: Multi Input */}


      {/* THIS IS A COMMENT: Multi Input - 1 State */}



      {/* THIS IS A COMMENT: Dropdown */}
        {/* <FormDropDownExamples /> */}

      {/* THIS IS A COMMENT: Checkbox */}
        {/* <FormCheckBoxExamples /> */}

      {/* THIS IS A COMMENT: Refreshing and Highlighting Common Input-field Types */}
        {/* <MostFormInputs /> */}


    </>
  )
}

export default App





/*


  < App />  [showTypedTextAfterSubmit, setShowTypedTextAfterSubmit]  [newFellowName, setNewFellowName] 

  L>

    // <MostFormInputs />  <FormCheckBoxExamples />  <FormDropDownExamples />   <FormTextInputExamples />[newFellowName, setNewFellowName]
    
    <MostFormInputs />  
    <FormCheckBoxExamples />  
    <FormDropDownExamples />   
    <FormTextInputExamples />


*/