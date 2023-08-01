import { useState } from "react"


const FormDropDownExamples =()=>{

    // const [v, f] = useState( initialValue )    ////  🚚
    const [selectedOption, setSelectedOption] = useState( "" )
    console.log("STATE OF  selectedOption: " , selectedOption)

 
    return(<form>


        <select 
          onChange={  
      
            (synthEvent)=>{ 
      
              // console.log(synthEvent) 
              // console.log(synthEvent.target) 
              // console.log(synthEvent.target.value) 
              setSelectedOption( synthEvent.target.value ) 
      
            }  
      
          } 
        >
      
          <option select="selected">Choose Your Borough</option>
      
      
          <option value="The Boogie Down" >The Bronx</option>
          <option value="2" >Harlem</option>
          <option value="3" >Manhattan</option>
          <option value="4" >Queen</option>
          <option value="5" >Brooklyn</option>
          <option value="6" >Staten Island</option>
          <option value="7" >Westchester</option>
          <option value="8" >Yonkers</option>
      
        </select>
      
      
        </form>)
}

export default FormDropDownExamples