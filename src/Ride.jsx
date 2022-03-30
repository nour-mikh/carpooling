import {useNavigate } from "react-router-dom";


function Ride(props){
    const navigate = useNavigate();
    return (
        <>
        <div className="shadow p-3 mt-5 mb-5 bg-light rounded ride" onClick = {() => navigate("/ride1")}>
            <div><h2>{props.name}</h2></div>
            <div>{props.description}</div>
        </div>
      
        </>
    )
}


export default Ride;