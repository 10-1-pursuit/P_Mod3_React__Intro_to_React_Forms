

const MostFormInputs =( props )=> {

    return(
        <form>

        <input />
        <input type='' />
        <input type='text' />

        <br/>

        <input type='number' />

        <br/>

        <input type='date' />

        <br/>

        <input type='checkbox' />

        <br/>

        <input type='radio' />


        <br/>
        <br/>


        {/* < input /> */}
        <select>
          <option selected="selected">Choose Your Borough</option>

          <option >The Bronx</option>
          <option >Harlem</option>
          <option >Manhattan</option>
          <option >Queen</option>
          <option >Brooklyn</option>
          <option >Staten Island</option>
          <option >Yonkers</option>
        </select>


        <input type='submit' />
        <button type='submit'></button>


      </form>
    )

}

export default MostFormInputs