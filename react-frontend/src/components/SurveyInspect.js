import { useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';

import axios from 'axios';

import QuestionDisplay from './survey display/QuestionDisplay';

const SurveyInspect = () => {

    const [title,setTitle] = useState('')
    const [questions,setQuestions] = useState([])
    const [values,setValues] = useState([])

    //fetching survey title and questions
    useEffect(() => {

        let data = new FormData();
        data.append('id',params.id)

        axios({
            method: 'POST',
            url: 'http://127.0.0.1:8000/api/survey_details',
            data: data
        }).then((Response) => {
            console.log(Response.data.questions)
            setTitle(Response.data.survey.title)
            setQuestions(Response.data.questions)
        })

    },[])

    //initializing usePrams hook
    let params = useParams()

    return ( 
        <>
            <h1 className='title'>{title}</h1>
            <div id='inspect-survey-container'>

                {
                    questions.map(question => 
                            <div>{<QuestionDisplay
                                id={question.id}
                                question={question.question}
                                type={question.type}
                                />}
                            </div>
                    ) 
                }

            </div>
        </>
     );
}
 
export default SurveyInspect;

// [
//     {
//         "id": 327,
//         "value": "dsa",
//         "question_id": 145,
//     },
//     {
//         "id": 328,
//         "value": "asddsa",
//         "question_id": 145,
//     }
// ]