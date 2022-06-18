import { useParams, useNavigate } from 'react-router-dom';

const SurveyInspect = (props) => {

    let params = useParams()

    return ( 
        <>
            <h1>{params.id}</h1>
        </>
     );
}
 
export default SurveyInspect;