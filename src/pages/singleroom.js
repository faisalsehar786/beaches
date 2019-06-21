import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link , NavLink ,Switch} from "react-router-dom";

import {  RoomContext  } from '../context';
import Baner from '../components/Baner';
import Hero from '../components/Hero';
import defultBcg from '../images/room-1.jpeg';
import StyledHero from "../components/StyledHero";

export default class SingleRoom extends Component {
constructor(props) {
    super(props)
   this.state={
       id:this.props.match.params.id,
       defultBcg
   }
   
}
static contextType=RoomContext;

    render() {
       
        const {getRoom}=this.context;
        const roomdetails=getRoom(this.state.id);
        if(!roomdetails){

            return(
<div className="error">
<h3>No Such Room Found ......</h3>

<Link to="/Rooms" className="btn-primary">Go Back Rooms</Link>
</div>

            );
        }


        const {name,description,capacity,size,price,extras,breakfast,pets,images}=roomdetails;
        {console.log(images);}
        return (
           <React.Fragment>
<StyledHero img={images[0] || defultBcg}>
   <Baner title={name} >
  <Link to="/Rooms" className="btn-primary">
    Back to Rooms
  </Link>
   </Baner>
      </StyledHero>
   
     
      <section className="single-room">
          <div className="single-room-images">
{ 
images.map((item,index)=>{

    return <img src={item||defultBcg} key={index} alt="p-images"/>
})

}

          </div>
          <div className="single-room-info">
<article className="desc">
<h3>
Deatils
</h3>
<p>
{description}
</p>

</article>
<article className="info">
<h3>Info</h3>
<h6>
Price:${price}
</h6>
<h6>
Size:${size}SQFT
</h6>
<h6>
    MaxCapacity:{""}
    {capacity?`${capacity} People`:`${capacity} Person`}
</h6>
<h6>
    {pets?"Pets allowed":"Pets not Allowed"}
</h6>
<h6>
{breakfast && "Breakfast Free Included"}
</h6>
</article>
</div>
      </section>
      <section className="room-extras">
          <h6>Extras</h6>
          <ul className="extras">
{

    extras.map((extra,index)=>{

        return<li key={index}>{extra}</li>
    })
}

          </ul>
      </section>
      </React.Fragment>
        );
    }
}
