import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import axios from 'axios';

import SurveyCard from './survey display/SurveyCard';
import Nav from './Nav';

const MySurveys = () => {

    const nav = useNavigate()

    const [surveys,setSurveys] = useState([]);

    useEffect(() => {
        //get the user's surveys
        // let data = new FormData()
        // data.append('user_id',1)

        axios({
            headers:{
                'Content-Type': 'application/json',
                'Authorization': 'Bearer '+localStorage.getItem('token')
            },
            method: 'POST',
            url:'http://127.0.0.1:8000/api/get_my_surveys'
            // data: data
        }).then((Response) => {
            setSurveys(Response.data.surveys)
        }).catch((err) => {
            nav('/')
        })
    },[])

    return ( 

        <>
            <Nav />
            <div id='my-surveys-container'>
                <h1>My surveys</h1>

                <div id="cards-container">
                    {
                    surveys.map(survey => 
                            <div>{<SurveyCard id={survey.id} title={survey.title}/>}</div>
                    ) 
                    }
                </div>
            </div>
        </>
     );
}
 
export default MySurveys;