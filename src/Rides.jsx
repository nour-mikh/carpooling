import React from "react";

function Rides(){
    return(
        <>
        <h1 className = "mt-5 mb-5 text-center text-primary" > <i class="bi bi-people-fill"></i> Rides you're registered in</h1>
        <div className = "d-flex justify-content-around flex-wrap rides">
            <Ride name = "Ride 1" description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. " />
            <Ride name = "Ride 2" description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
            <Ride name = "Ride 3" description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
            <Ride name = "Ride 4" description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
            <Ride name = "Ride 5" description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
        </div>


        </>
    )
}


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

export default Rides;
export {Ride};