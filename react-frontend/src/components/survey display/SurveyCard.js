import { useParams, useNavigate } from 'react-router-dom';



const SurveyCard = (props) => {

    const navigate = useNavigate()

    const handleClick = () => {
        console.log(props.id)
        navigate('/'+props.id+'')
    }

    return ( 
        <>
            <div className="card-container" id={props.id} onClick={handleClick}>
                <h2>{props.title}</h2>
            </div>
        </>
     );
}
 
export default SurveyCard;