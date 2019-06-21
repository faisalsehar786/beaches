import React from 'react'
import defaultimg from "../images/room-1.jpeg"
import { BrowserRouter as Router, Route, Link , NavLink ,Switch} from "react-router-dom";


const Allrooms = (props) => {
let {name ,slug ,images ,price ,id}=props.room
  return (
  <article className="room">
<div className="img-container">
<img src={images[0] || defaultimg} alt="room inages "></img>
<div className="price-top">
  <h6>
${price}
  </h6>
  <p>
per night
  </p>
</div>
<Link to={`/SingleRoom/${id}`} className="btn-primary room-link"> Feature</Link>
</div>
<p className="room-info">{name}</p>
  </article>
  );
}

export default Allrooms;
