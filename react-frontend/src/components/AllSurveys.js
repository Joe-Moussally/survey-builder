import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'

import axios from 'axios'

import FormCard from "./survey display/FormCard"


const AllSurveys = () => {

    const nav = useNavigate()

    const [surveys, setSurveys] = useState([])

    useEffect(()=>{
        //fetch all surveys
        axios({
            method: 'POST',
            url: 'http://127.0.0.1:8000/api/get_surveys'
        }).then((Response) => {
            console.log(Response.data.surveys)
            setSurveys(Response.data.surveys)
        })
    },[])

    return ( 
        <>
        <button onClick={() => {nav('/')}}>Log In As Admin</button>
            {
                <div id='my-surveys-container'>
                    <h1>Recent Surveys</h1>
    
                    <div id="cards-container">
                        {
                        surveys.map(survey => 
                                <div>{<FormCard id={survey.id} title={survey.title}/>}</div>
                        ) 
                        }
                    </div>
                </div>
            }
        </>
     );
}
 
export default AllSurveys;