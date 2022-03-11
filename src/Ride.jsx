
function Ride(props){
    return (
        <>
        <div className="shadow p-3 mb-5 bg-light rounded ride">
            <div><h2>{props.name}</h2></div>
            <div>{props.description}</div>
        </div>
      
        </>
    )
}


export default Ride;