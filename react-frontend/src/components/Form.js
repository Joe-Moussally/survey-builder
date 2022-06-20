import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import $, { data } from 'jquery';


import axios from 'axios'

import QuestionDisplay from "./survey display/QuestionDisplay";


const Form = () => {

    const nav = useNavigate()
    //initializing usePrams hook
    let params = useParams()
    
    const id = params.id


    const [title,setTitle] = useState('')
    const [questions,setQuestions] = useState([])

    //variable to store the answers and post them to the db
    const [answers, setAnswers] = useState([])

    //fetching survey title and questions
    useEffect(() => {

        let data = new FormData();
        data.append('id',params.id)

        axios({
            method: 'POST',
            url: 'http://127.0.0.1:8000/api/survey_details',
            data: data
        }).then((Response) => {
            setTitle(Response.data.survey.title)
            setQuestions(Response.data.questions)
        })

    },[])

    //function that gathers the answers of the question
    const handleSubmit = () => {
        
        //targt all questions containers and
        //extract input tags inside it   
        let inputs = document.getElementsByTagName('input')

        for(let i=0;i<inputs.length;i++) {
            if (inputs[i].type == 'color') {
                
                let value = inputs[i].value
                let question_id =  $(inputs[i]).parent()[0].id

                answers.push({
                    'question_id':question_id,
                    'value':value
                })
                setAnswers(answers)
                continue
            } else if (inputs[i].type == 'text') {

                //skip if text in empty
                if (inputs[i].value == '')  {
                    continue
                }

                let value = inputs[i].value
                let question_id = $(inputs[i]).parent()[0].id

                answers.push({
                    'question_id':question_id,
                    'value':value
                })
                setAnswers(answers)
                continue

            } else if (inputs[i].type == 'radio' || inputs[i].type == 'checkbox') {

                //if radio is checked
                if (inputs[i].checked) {
                    let value = inputs[i].value
                    let question_id = $(inputs[i]).parent().parent()[0].id

                    answers.push({
                        'question_id':question_id,
                        'value':value
                    })
                    setAnswers(answers)
                    continue
                }

            } else if (inputs[i].type == 'date') {
                
                let value = inputs[i].value

                //if date is empty, continue
                if (value = '' || value == null) {
                    continue
                } 

                let question_id = $(inputs[i]).parent()[0].id
                answers.push({
                    'question_id':question_id,
                    'value':value
                })
                setAnswers(answers)
                continue
            }       
        }
        

        console.log(answers)
        //call the api to store the data
        //-----

        //I had ANNOYING BUG that took 7 hours
        //so a turn around is to for loop axios
        //instead of for loop in php
        answers.forEach(answer=> {

        
            let data = new FormData()
            data.append('answer',JSON.stringify(answer))

            axios({
                headers:{
                    'Content-Type':'application/json'
                },
                method: 'POST',
                url:'http://127.0.0.1:8000/api/add_answers',
                data:data
            }).then((Response) => {
                console.log(Response.data)
                nav('/all_surveys')
            })
        })
    }



    return ( 
        <>
            <h1 className='title'>{title}</h1>
            <div id='inspect-survey-container'>

                {
                    questions.map(question => 
                            <QuestionDisplay
                                id={question.id}
                                question={question.question}
                                type={question.type}
                                />        
                    ) 
                }

                <button id="submit-form" onClick={handleSubmit}>Submit</button>

            </div>
        </>
    )

}
 
export default Form;