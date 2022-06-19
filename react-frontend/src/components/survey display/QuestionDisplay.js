import axios from "axios";
import { useEffect, useState } from "react";


const QuestionDisplay = ( { id, question, type } ) => {

    //checking question type
    const [answer,setAnswer] = useState('')
    const [values,setValues] = useState([])

    useEffect(()=> {
        if (type == 'text') {

            setAnswer(<input type={'text'}></input>)

        } else if (type == 'radio') {

            //fetch the values of the radio question
            let data = new FormData()
            data.append('id',id)
            axios({
                method:'POST',
                url: 'http://127.0.0.1:8000/api/get_values',
                data: data
            }).then(Response => {
                let values = Response.data.values
                setValues(values);
                let tags = [];
                values.forEach(value => {
                    tags.push(
                        <>
                            <div className="answer-container">
                                <input type={'radio'} value={value.value}></input>
                                <span>{value.value}</span>
                            </div>
                        </>
                    )
                });
                setAnswer(tags)
                console.log(tags)
            })
            

        }else if (type == 'checkbox') {

            //fetch the values of the radio question
            let data = new FormData()
            data.append('id',id)
            axios({
                method:'POST',
                url: 'http://127.0.0.1:8000/api/get_values',
                data: data
            }).then(Response => {
                let values = Response.data.values
                setValues(values);
                let tags = [];
                values.forEach(value => {
                    tags.push(
                        <>
                            <div className="answer-container">
                                <input type={'checkbox'} value={value.value}></input>
                                <span>{value.value}</span>
                            </div>
                        </>
                    )
                });
                setAnswer(tags)
                console.log(tags)
            })
            

        }
    },[id,type])


    return ( 
        <>
            <div className="question-container" id={id}>
                <h3 className="question-title">{question}</h3>
                {answer}

            </div>
        </>
     );
}
 
export default QuestionDisplay;