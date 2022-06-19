import { useNavigate } from "react-router-dom"

const FormCard = ({ id, title }) => {
    const nav = useNavigate()

    const handleClick = () => {
        console.log(id)
        nav('/form/'+id+'')
    }

    return ( 
        <>
            <div className="card-container" id={id} onClick={handleClick}>
                <h2>{title}</h2>
            </div>
        </>
     );
}
 
export default FormCard;