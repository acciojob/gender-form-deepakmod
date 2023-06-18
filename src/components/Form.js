import React, { useState } from 'react';

function Form(){

    let [gender, setGender] = useState("");

    return (
        <form>
            <h2>Select your gender:</h2>

            <input type="radio"  name="gender" id="Male" onClick={()=>{setGender("male")}} />
            <label for="Male">Male</label><br/>

            <input type="radio"  name="gender" id="Female"  onClick={()=>{setGender("female")}} />
            <label for="Female">Female</label><br/>

            {gender==="male" && <div>
                <h2>Select your shirt size:</h2>
                <select>
                    <option>Select Size</option>
                    <option>Small</option>
                    <option>Medium</option>
                    <option>Large</option>
                </select>
            </div>}

            {gender==="female" && <div>
                <h2>Select your dress size:</h2>
                <select>
                    <option>Select Size</option>
                    <option>2</option>
                    <option>4</option>
                    <option>6</option>
                </select>
            </div>}

        </form>
    )
}
export default Form;