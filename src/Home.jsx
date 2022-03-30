import React from "react";


function Home() {
  return (
    <div className="home">
      <div className="container">
        <div className="row align-items-center my-5">
          <h1 className="text-center text-primary mb-3">Start carpooling today! </h1>
          <div className="d-flex justify-content-around mt-5">
            <Option option = "Search for ride" description = "Search for a ride using a code provided by the ride organizer"/>
            <Option option = "Organize" description = "Organize a carpool with your friends and invite them using a generated code"/>
            <Option option = "Explore" description = "Find rides organized by your friends around your location"/>
          </div>
          
        </div>
      </div>
    </div>
  );
}

function Option(props) {
  return (
    <>
    <div className="shadow-lg p-3 mt-5 mb-5 bg-light rounded option text-center">
      <div><h2>{props.option}</h2></div>
      <div>{props.description}</div>
    </div>
      
    </>
)
}

function ridesPage(props) {
  return (
    <>
    <div class="d-flex flex-column justify-content-start">
      <h1>{props.option}</h1>
      <h2>Depature</h2>
      <p>{props.departure}</p>

      <h2>Destination</h2>
      <p>{props.destination}</p>

      <h2>Driver(s)</h2>
      <p>{props.drivers}</p>

      <h2>Date</h2>
      <p>{props.date}</p>

      <h2>Depature Time</h2>
      <p>{props.departureTime}</p>

      <h2>Friends Joining</h2>
      <p>{props.friends}</p>
    </div>
    </>
  )
}

function friendsJoining (props){
  return (
    <>
    <div class="d-flex flex-column justify-content-start">
      <h1>Friends Joining</h1>

    </div>
    </>
  )
}

function friend(props){
  return(
    <>
    {/* Implement auto loading of friends */}
    <h2>{props.name}</h2>
    <p>Picked up by driver {props.driver1}</p>
    <button class = "bg-secondary text-light">Pick Up</button>
    </>
  )
}

export default Home
export {Option, ridesPage, friendsJoining};
