const Checkbox = () => {
    //function that adds a Check option
    const addCheck = () => {
        let value = document.getElementById('checkbox-text').value;
        if (value != '') {
            document.getElementById('values').innerHTML +=
            '<input type="checkbox" value="'+value+'" class="values">'+value+'</input><br/>'
            document.getElementById('checkbox-text').value = ''
        }
    }

    return ( 
    

        <>
            <div id="input-container">
                <input id="checkbox-text" placeholder="Enter Checkbox Here"></input>
                <button id="add-radio" onClick={addCheck}>Add Checkbox</button>
                
                <div id="values">

                </div>
            </div>
        </>
     );
}
 
export default Checkbox;
