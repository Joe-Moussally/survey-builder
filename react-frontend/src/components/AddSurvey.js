import React, { useState } from 'react';

import axios from 'axios';

import Text from './Text'
import Radio from './Radio'
import Checkbox from './Checkbox'
import Color from './Color'
import Date from './Date'
import Question from './Question'

const AddSurvey = () => {

    //defining variables
        // const [questions,setQuestions] = useState([]);
        const questions = []
        const [arrayQuestions,setArrayQuestions] = useState([])//used to store questions as JSON objects for axios later
        const [type,setType] = useState('text');
        //variable to display input of a type
        const [typeInput,setTypeInput] = useState(Text);

    //change the input type
    const handleTypeChange = (e) => {

        setType(e.target.value)
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
        let values_tags;//html tags that contain the values
        let values_array = [];//array to store the values of a question (if any)
        let question = document.getElementById('question').value;
        let type =  document.getElementById('type').value;

        if (question != '') {
            questions.push(<Question type={type}/>)
            // setQuestions(questions) 
            document.getElementById('questions-container').innerHTML += '<div class="display-question-admin"><strong>'+question+'&nbsp&nbsp type: '+type+'</strong></div>'
            values_tags = document.getElementsByClassName('values')//get the values container


            //get the values inserted
            //for radios and checkboxes
            for (let i=0; i<values_tags.length;i++) {
                document.getElementById('questions-container').innerHTML += '<div class="display-answers-admin">'+values_tags[i].value+'</div>'
                values_array.push(values_tags[i].value)
            }

            setTypeInput(Text)
            document.getElementById('question').value = ''
        }

        //add the question, type and values as JSON to array_questions
        if (question != '') {
            arrayQuestions.push(
                {
                    'question':question,
                    'type':type,
                    'values': values_array
                }
            )

            setArrayQuestions(arrayQuestions);
        }

        console.log(arrayQuestions)
    }

    //function that handles information
    //when submitting the survey
    const createSurvey = () => {
        
        console.log('questions',arrayQuestions)
        let survey_title = document.getElementById('title-input').value
        let data = new FormData();

        data.append('questions',arrayQuestions)
        data.append('title',JSON.stringify(survey_title))

        axios({
            method:'POST',
            url: 'http://127.0.0.1:8000/api/add_survey',
            data: data
        }).then((Response) => {
            console.log(Response.data)
        })
    }


    return ( 
        <>
            <div id="survey-container">
                <h1>Add Survey</h1>
                <input type='text' placeholder='Enter survey title' id='title-input'></input>

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

                <input id='question' type='text' placeholder = 'Enter question here'></input>
                <br></br>
                <div id='input-container'>{typeInput}</div>
                <button id='add-question' onClick={addQuestion}>Add question</button>

                <div id='questions-container'></div>

                <button id='add-survey' onClick={createSurvey}>Submit</button>

            </div>
        </>

        
     );
}
 
export default AddSurvey;