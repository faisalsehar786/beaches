import React from 'react'
import { BrowserRouter as Router, Route, Link , NavLink ,Switch} from "react-router-dom";
import RoomsContainer from "../components/RoomsContainer";
import Baner from "../components/Baner";
import Hero from "../components/Hero";
const Rooms = (props) => {


  return (
    <React.Fragment>
   <Hero hero="roomsHero">
   <Baner title="Welllcome to Rrooms ">
  <Link to="/" className="btn-primary">
    Return to home page
  </Link>
   </Baner>
      </Hero>
   <RoomsContainer/>
   </React.Fragment>
  )
}

export default Rooms
