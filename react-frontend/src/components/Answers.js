import { useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';

import axios from 'axios';

import QuestionDisplay from './survey display/QuestionDisplay';
import Nav from './Nav';

const Answers = () => {

    const [title,setTitle] = useState('')
    const [questions,setQuestions] = useState([])

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

    //initializing usePrams hook
    let params = useParams()

    return ( 
        <>
            <Nav />
            <h1 className='title'>{title}</h1>
            <div id='inspect-survey-container'>

                {
                    questions.map(question => 
                            <div id={question.id}>{<QuestionDisplay
                                id={question.id}
                                question={question.question}
                                type={null}
                                />}
                                <span></span>
                            </div>
                    ) 
                }

            </div>
        </>
     );
}
 
export default Answers;