import { useParams } from "react-router-dom";
import axios from 'axios';
import { useEffect, useState } from "react";

const Answer = (props) => {

    const [answers,setAnswers] = useState([])


        //get the question id and
        //get its answers by axios
        let data = new FormData()
        data.append('id',props.id)

        axios({
            method:'POST',
            url: 'http://127.0.0.1:8000/api/get_answers',
            data: data
        }).then((Response) => {
            setAnswers(Response.data.answers)
            console.log(Response.data.answers)
        })

    return ( 
        <>
            <span>{answers}</span>
        </>
     );
}
 
export default Answer;