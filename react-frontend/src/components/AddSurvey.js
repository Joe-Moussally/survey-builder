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
        const [typeInput,setTypeInput] = useState(Text);

    //change the input type
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

    //add the question to the survey
    const addQuestion = () => {
        let question = document.getElementById('question');
        if (question.value != '') {

        }
    }


    return ( 
        <>
            <h1>Add Survey</h1>
            <input type='text' placeholder='Enter survey title'></input>

            <br></br>

            
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
            <input id='question' type='text' placeholder = 'Enter question here'></input>
            <br></br>
            {typeInput}
            <button id='add-question' onClick={addQuestion}>Add question</button>

            <div id='questions-container'></div>
        </>

        
     );
}
 
export default AddSurvey;