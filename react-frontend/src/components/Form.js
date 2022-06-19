import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import $ from 'jquery';


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

        if (inputs[1].type == 'color') {
            
            let value = inputs[0].value
            let question_id =  $(inputs[0]).parent()[0].id

            answers.push({
                'question_id':question_id,
                'value':value
            })
            setAnswers(answers)
            return
        } else if (inputs[1].type == 'text') {
            console.log(inputs[1].value)
            let value = inputs[1].value
            let question_id = $(inputs[1]).parent()[0].id

            answers.push({
                'question_id':question_id,
                'value':value
            })
            setAnswers(answers)
            return

        }

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