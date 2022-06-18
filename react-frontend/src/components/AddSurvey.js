import React, { useState } from 'react';

import Text from './Text'
import Radio from './Radio'
import Checkbox from './Checkbox'
import Color from './Color'
import Date from './Date'

const AddSurvey = () => {

    //defining variables
        const [type,setType] = useState('text');
        //variable to display input of a type
        const [typeInput,setTypeInput] = useState('');

    //handleTypeChange
    const handleTypeChange = (e) => {
        
        setType(e.target.value)
        console.log(type)
        if (e.target.value == 'text') {
            setTypeInput(Text)
        } else if (e.target.value == 'radio') {
            setTypeInput(Radio)
        } else if (e.target.value == 'checkbox') {
            setTypeInput(Checkbox)
        } else if (e.target.value == 'color') {
            setTypeInput(Color)
        } else if (e.target.value == 'date') {
            setTypeInput(Date)
        }
    }


    return ( 
        <>
            <h1>Add Survey</h1>
            <label>Enter question type</label>
            <select name="question-type" id="type" onChange={handleTypeChange}>
                <option value="text">text</option>
                <option value="checkbox">checkbox</option>
                <option value="radio">radio</option>
                <option value="color">color</option>
                <option value="date">date</option>
            </select>
            <br></br>

            <label>Enter question title</label>
            <input type='text' placeholder = 'Enter question here'></input>
            <br></br>
            {typeInput}
        </>

        
     );
}
 
export default AddSurvey;