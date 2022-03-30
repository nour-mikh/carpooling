import React, {useState} from "react";
import Ride from './Ride';


function Rides(){
    const [rides, setRides] = useState([
        {
            index : "/ride1",
            name: "Ride 1",
            description : "LAU Beirut"
        },
        {
            index: 2,
            name: "Ride 2",
            description: "LeMall Dbayeh"
    
        },
        {
            index: 3,
            name: "Ride 3",
            description: "Beirut-Rafic Hariri International Airport"
    
        }
    ])
    return(
        <>
        <h1 className = "mt-5 mb-5 text-center text-primary" > Rides you're registered in</h1>
        <div className = "d-flex justify-content-around flex-wrap rides">
        {rides.map((ride) => (
        <Ride name={ride.name} description = {ride.description} />
      ))}
        </div>


        </>
    )
}


export default Rides;
