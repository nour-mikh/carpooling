import React, {useState} from "react";
import Ride from './Ride';


function Rides(){
    const [rides, setRides] = useState([
        {
            index : 1,
            name: "Valerie",
            description : "trdfkyugtiyfyrd"
        },
        {
            index: 2,
            name: "Chloe",
            description: "dftguiljhf"
    
        },
        {
            index: 3,
            name: "Tatiana",
            description: "tsyftgfc"
    
        }
    ])
    return(
        <>
        <h1 className = "mt-5 mb-5 text-center text-primary" > <i class="bi bi-people-fill"></i> Rides you're registered in</h1>
        <div className = "d-flex justify-content-around flex-wrap rides">
        {rides.map((ride) => (
        <Ride name={ride.name} description = {ride.description} />
      ))}
        </div>


        </>
    )
}


export default Rides;
