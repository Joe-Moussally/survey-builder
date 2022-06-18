const SurveyCard = (props) => {
    return ( 
        <>
            <div className="card-container" id={props.id}>
                <h2>{props.title}</h2>
            </div>
        </>
     );
}
 
export default SurveyCard;