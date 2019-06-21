import React from 'react';

import { BrowserRouter as Router, Route, Link , NavLink ,Switch} from "react-router-dom";

import Baner from "../components/Baner";
import Hero from "../components/Hero";
import Roomfeature from '../components/Roomfeature';
import Services from "../components/Services";
import StyledHero from "../components/StyledHero";

const Home = () => {
  return (
<React.Fragment>
   <Hero>
   <Baner title="Wellcome " subtitle="Price is stating from 30$ per Room.">
  <Link to="/Rooms" className="btn-primary">
Our Rooms
  </Link>
   </Baner>
      </Hero>
      <Services/>
      <Roomfeature/>
      {/* <StyledHero > link</StyledHero> */}
    </React.Fragment>
  )
}

export default Home;