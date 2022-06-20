import { useParams } from "react-router-dom";
import axios from 'axios';
import { useEffect, useState } from "react";

const Answer = (props) => {

    const [answers,setAnswers] = useState([])

    
        useEffect(()=>{

            //get the question id and
            //get its answers by axios
            let id = props.id
            let data = new FormData()
            data.append('id',id)

            axios({
                method:'POST',
                url: 'http://127.0.0.1:8000/api/get_answers',
                data: data
            }).then((Response) => {
                setAnswers(Response.data.answers)
            })

        },[])

        //adding answers in array

        let answerArray = []

        for(var key in answers) {
            if(answers.hasOwnProperty(key)) {
                console.log(answers[key]['answer'])
                answerArray.push(answers[key]['answer'])
            }
        }
        





    return ( 
        <>
            <span id={props.id}>
                {
                    answerArray.map(a =>{
                        if(a) {
                            console.log("A",a)
                            document.getElementById(props.id).innerHTML += a+'<br>'
                        }
                    })
                }
            </span>
        </>
     );
}
 
export default Answer;