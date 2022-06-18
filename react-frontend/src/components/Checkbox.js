const Checkbox = () => {
    //function that adds a Check option
    const addCheck = () => {
        let value = document.getElementById('checkbox-text').value;
        if (value != '') {
            document.getElementById('checkboxes-container').innerHTML +=
            '<input type="checkbox" value="'+value+'">'+value+'</input>'
            document.getElementById('checkbox-text').value = ''
        }
    }

    return ( 
    

        <>
            <input id="checkbox-text" placeholder="Enter Checkbox Here"></input>
            <button id="add-radio" onClick={addCheck}>Add Checkbox</button>
            
            <div id="checkboxes-container">

            </div>
        </>
     );
}
 
export default Checkbox;
