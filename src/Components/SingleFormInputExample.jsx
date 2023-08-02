{/* 

    <SingleFormInputExample 

        // [v, f]
                newNameForForm={newNameForForm}  
                setNewNameForForm={setNewNameForForm}

        // [f]
        addNewFellowToArray={setArrayOfFellowNames}
    
    />

*/}

const SingleFormInputExample =( props )=>{



    return(<form 

        onSubmit={  
          
          (synthEvent)=>{ 
            synthEvent.preventDefault();

            // props.addNewFellowToArray(  [ ...props.arrayOfFellowNames , props.newNameForForm ]  )
            props.addNewFellowToArray(  [ props.newNameForForm, ...props.arrayOfFellowNames ]  )

            props.setNewNameForForm("")                
          }  
      
        } 

      >


        <label>
          New Fellow Name:
          <input type='text' value={ props.newNameForForm } 

            onChange={  
              (synthEvent)=>{  props.setNewNameForForm(synthEvent.target.value)  }  
            } 

          />
        </label>

          <input type='submit' />


      </form>)
}

export default SingleFormInputExample