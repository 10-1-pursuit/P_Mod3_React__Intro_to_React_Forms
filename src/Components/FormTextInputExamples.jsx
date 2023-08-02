import { useState } from "react"


{/* 

    //// The Prop Pass in App.jsx


    <FormTextInputExamples  

       // [v, f]
          // showTypedTextAfterSubmitFromApp={showTypedTextAfterSubmit} 
        showTheTextFunction={setShowTypedTextAfterSubmit} 

        // [v, f]
        newFellowName={newFellowName}
        setNewFellowName={setNewFellowName}
        
    /> 

*/}


const FormTextInputExamples =( props )=> {


    console.log("props: " , props)
        console.log("props.showTypedTextAfterSubmitFromApp: " , props.showTypedTextAfterSubmitFromApp)
        console.log("props.showTheTextFunction: " , props.showTheTextFunction)

        console.log("props.newFellowName: " , props.newFellowName)
        console.log("props.setNewFellowName: " , props.setNewFellowName)


    return(<form 
        onSubmit={  

            (synthEvent)=>{ 
              synthEvent.preventDefault();

              // console.log( synthEvent )
              // console.log( synthEvent.target.newName )
              // console.log( synthEvent.target.newName.value )

              props.showTheTextFunction( true )
            }  

          } 
      >

        New Fellow Name: 
        <input type='text' 
          id='newName' name='' className='' 
          
          onChange={    (synthEvent)=>{  props.setNewFellowName(synthEvent.target.value)   }    }
          value={  props.newFellowName  }  
        />
        {/* New Fellow Name: <input type='text' id='sam' name='' className='' /> */}

        <input type='submit' />

      </form>)
}

export default FormTextInputExamples