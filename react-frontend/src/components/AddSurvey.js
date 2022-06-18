import React, { useState } from 'react';

import Text from './Text'
import Radio from './Radio'
import Checkbox from './Checkbox'
import Color from './Color'
import Date from './Date'
import Question from './Question'

const AddSurvey = () => {

    //defining variables
        const [questions,setQuestions] = useState([]);
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
        let values_tags;
        let question = document.getElementById('question').value;
        let type =  document.getElementById('type').value;

        if (question != '') {
            questions.push(<Question type={type}/>)
            setQuestions(questions) 
            document.getElementById('questions-container').innerHTML += '<div class="display-question-admin"><strong>'+question+'&nbsp&nbsp type: '+type+'</strong></div>'
            values_tags = document.getElementsByClassName('values')//get the values container
            console.log(values_tags.length)

            //get the values inserted
            //for radios and checkboxes
            for (let i=0; i<values_tags.length;i++) {
                console.log(values_tags[i].value)
                document.getElementById('questions-container').innerHTML += '<div class="display-answers-admin">'+values_tags[i].value+'</div>'
            }

            setTypeInput(Text)
            document.getElementById('question').value = ''
        }
    }


    return ( 
        <>
            <div id="survey-container">
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
                <div id='input-container'>{typeInput}</div>
                <button id='add-question' onClick={addQuestion}>Add question</button>

                <div id='questions-container'></div>
            </div>
        </>

        
     );
}
 
export default AddSurvey;