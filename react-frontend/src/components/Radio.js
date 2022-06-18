const Radio = () => {

    //function that adds a radio option
    const addRadio = () => {
        let value = document.getElementById('radio-text').value;
        if (value != '') {
            document.getElementById('radios-container').innerHTML +=
            '<input type="radio" value="'+value+'" name="s">'+value+'</input>'
            document.getElementById('radio-text').value = ''
        }
    }

    return ( 
    

        <>
            <input id="radio-text" placeholder="Enter Option Here"></input>
            <button id="add-radio" onClick={addRadio}>Add Option</button>
            
            <div id="radios-container">

            </div>
        </>
     );
}
 
export default Radio;