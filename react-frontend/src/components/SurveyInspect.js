import { useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';

import axios from 'axios';

const SurveyInspect = () => {

    const [title,setTitle] = useState('')
    const [questions,setQuestions] = useState('')

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
            <div id='inspect-survey-container'>{params.id}</div>
        </>
     );
}
 
export default SurveyInspect;