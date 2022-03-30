import Ride from './Ride';
import React, {useState} from "react";
import person1 from './media/person1.png';
import person2 from './media/person2.png';
import person3 from './media/person3.png';
import person4 from './media/person4.png';
import person5 from './media/person5.png';


const BasicProfile = (props) => {
    return(
        <section id = "profileSection">
                <div id = "description">
                    <div id = "name">
                        <img src= {props.profile} id = "profilePicture"/>
                    </div>
    
                    <div className = "mt-3">
                        <h2>{props.name}</h2>
                        <ul>
                            <li><i class="material-icons" >location_on</i>{props.location}</li>
                            <li><i class="material-icons" >directions_car</i>{props.vehicle}</li>
                            <li><i class="material-icons" >signpost</i>Frequently travels to {props.frequency}</li>
                            <li><i class="material-icons" >handshake</i>{props.shared}</li>
                        </ul>
                    </div>
                </div>
    
                <div id = "additionalInfo">
                    <div id = "contactInfo" className="bg-secondary">
                        <i class="material-icons" >inbox</i>
                        <i class="material-icons" >phone</i>
                        <i class="material-icons" >email</i>
                        <i class="material-icons" >map</i>
                    </div>
                </div>
    
                <div id = "descriptionParagraph">
                    <h3>Description</h3>
                    <p id = "shortDesc">
                        <figure id = "resources" className="text-center">
                            <div>
                                <i class="material-icons">directions_car</i>
                                <h5>{props.vehicle}</h5>
                            </div>	
                            <div>
                                <i class="material-icons">signpost</i>
                                <h5>{props.frequency}</h5>
                            </div>
                            <div>
                                <i class="material-icons">star_rate</i>
                                <h5>Achievements</h5>
                            </div>
                        </figure>
                    </p>
                </div>
            </section>
    )
}


const Posts = (props) => {
    const [rides, setRides] = useState([
        {
            index : 1,
            name: "Ride 1",
            description : "LAU Beirut"
        },
        {
            index: 2,
            name: "Ride 2",
            description: "LeMall Dbayeh"
    
        }
    ])
    return(
        <section class = "sectionPosts">
                <div id = "options">
                    <button class = "btn btn-secondary"> Connect </button>
                    <i class="material-icons" >more_vert</i>
                </div>
                <div id = "friends">
                    <h2>Friends</h2>
                    <img src= {props.fsrc1} />
                    <img src={props.fsrc2}/>
                    <img src= {props.fsrc3} />
                    <img src={props.fsrc4}/>
                </div>

                <div id = "ridesPics">
                    <h2>Planned Rides</h2>
                    
                    <div className = "d-flex justify-content-around flex-wrap rides">
                        <div id = "ridePreview">
                            {rides.map((ride) => (
                            <Ride name={ride.name} description = {ride.description} />
                        ))}
                        </div>
                    </div> 
                </div>
            </section>
    )
}

const PersonProfileBody = (props) => {
    return(
        <>
        <main id= "sectionBody">
            <BasicProfile profile = {person1} name = "Kevin Mikhael" location = "Byblos, Mt. Lebanon, Lebanon" vehicle = "Mercedes AMG A35" frequency = "Adma and Beirut" shared = "Together, you have carpooled 51km!" />
            <Posts fsrc1 = {person2} fsrc2 = {person3} fsrc3 = {person4} fsrc4 = {person5}/>
        </main>
        </>
    )
}

export default PersonProfileBody;