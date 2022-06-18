const Radio = () => {

    //function that adds a radio option
    const addRadio = () => {
        let value = document.getElementById('radio-text').value;
        if (value != '') {
            document.getElementById('values').innerHTML +=
            '<input type="radio" value="'+value+'" name="s" class="values">'+value+'</input><br/>'
            document.getElementById('radio-text').value = ''
        }
    }

    return ( 
    

        <>
            <div id="input-container">
                <input id="radio-text" placeholder="Enter Option Here"></input>
                <button id="add-radio" onClick={addRadio}>Add Option</button>
                
                <div id="values">

                </div>
            </div>
        </>
     );
}
 
export default Radio;