import React from 'react'

import { BrowserRouter as Router, Route, Link , NavLink ,Switch} from "react-router-dom";
import Hero from "../components/Hero";
import Baner from "../components/Baner";
const Error = () => {
    return ( 
   <Hero>
   <Baner title="404" subtitle="Page Not found">
  <Link to="/" className="btn-primary">
Return to home page
  </Link>
   </Baner>
      </Hero>
    )
}

export default Error