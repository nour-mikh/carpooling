import React, {useState} from "react";
import person1 from './media/person1.png';
import person2 from './media/person2.png';
import person3 from './media/person3.png';
import person4 from './media/person4.png';
import person5 from './media/person5.png';
import Map from './Map';


const RideInfo = (props) => {
    const [infos, setInfo] = useState([
        {
            index : 1,
            title: "Ride 1",
            departure: "LAU Byblos",
            destination : "LAU Beirut",
            distance: "37km",
            vehicule: "Honda civic 2008",
            resSeats: 2,
            avSeats: 4
        }
    ])
    return(
        <main id="sectionBody">
            <section class = "sectionPosts w-50 ml-5">
                <div id = "options">
                    <button class = "btn btn-secondary"> Opt Out </button>
                    <i class="material-icons" >more_vert</i>
                </div>

                <div id = "ridesPics" className="m-2">
                    
                    <div>
                        <div>
                            {infos.map((info) => (
                            <SingleInfo title={info.title} departure={info.departure} destination = {info.destination} distance = {info.distance} vehicle = {info.vehicule} resSeats = {info.resSeats} avSeats = {info.avSeats}  />
                        ))}
                        </div>
                    </div> 
                </div>
            </section>

            
            <div className = "d-flex flex-column rideInfoSide vh-100">
                <AdditionalRideInfo fsrc1 = {person1} fsrc2 = {person3} fsrc3 = {person4} fsrc4 = {person5}/>
                <div className="h-25">
                    <Map/>
                </div>
            </div>  
        </main>
        
    )
}

const SingleInfo = (props) => {
    return(
        <>
        <h2>{props.title}</h2>

        <h4>Departure</h4>
        <p>{props.departure}</p>

        <h4>Destination</h4>
        <p>{props.destination}</p>

        <h4>Distance</h4>
        <p>{props.distance}</p>

        <h4>Vehicle</h4>
        <p>{props.vehicle}</p>

        <h4>Reserved Seats</h4>
        <p>{props.resSeats}</p>

        <h4>Available Seats</h4>
        <p>{props.avSeats}</p>
        </>
    )
}

const AdditionalRideInfo = (props) => {
    return(
        <>
            <div id = "friends" className="m-4">
                <h2>Friends Going</h2>
                <img src= {props.fsrc1} />
                <img src={props.fsrc2}/>
            </div>  
        </>
    )
}

export default RideInfo;