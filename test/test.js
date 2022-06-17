let survey_id;
let questions;

const add_survey = () => {

    questions = [
        {'question':'delete','type':'checkbox','values':['test1','test2','test3']},
        {'question':'delete2','type':'checkbox','values':['test1','test2','test3']}
    ]
    
    let data1 = new FormData();
    data1.append('title','title');
    

    //add survey and return it's id
    axios({
        headers: {
            'content-type':'application/json'
        },
        method: 'POST',
        url: 'http://127.0.0.1:8000/api/add_survey',
        data: data1
    }).then((Response) => {

        //response data format JSON.parse(Response.data.test)[0].values....
        survey_id = Response.data.survey_id;

        //call the add questions api and pass the survey id to it
        add_question(survey_id,questions);
    })
}

//function that takes the survey id
//then add the questions related to it
const add_question = (id,q) => {

    let data2 = new FormData();
    data2.append('survey_id',id);
    data2.append('questions',JSON.stringify(q));

    axios({
        headers: {
            'content-type':'application/json'
        },
        method:'POST',
        url:'http://127.0.0.1:8000/api/add_questions',
        data: data2
    }).then((Response) => {
        console.log(Response.data)
    })

}

add_survey();