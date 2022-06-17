
let data = new FormData();
data.append('title','title');

let questions = [
    {'question':'delete','type':'checkbox','values':['test1','test2','test3']}
]

data.append('questions',JSON.stringify(questions))

axios({
    headers: {
        'content-type':'application/json'
    },
    method: 'POST',
    url: 'http://127.0.0.1:8000/api/test',
    data: data
}).then((Response) => {

    //response data format JSON.parse(Response.data.test)[0].values....
    console.log(JSON.parse(Response.data.test));
})