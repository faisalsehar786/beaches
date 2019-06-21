import React, { Component } from 'react'
import {  RoomContext  } from '../context';

import Allrooms from "./Allrooms";
import Tittle from "./Tittle";
export default class Roomfeature extends Component {
  
static contextType=RoomContext;

    render() {
let {loading ,featuredRooms,rooms}=this.context;


        return ( 
        
           
<section className="featured-rooms">
<Tittle title="Featured Rooms"/>
<div className="featured-rooms-center">
{

rooms.map((room, index) => {
    return <Allrooms key={room.id} room={room}/>
    
       
     
    })
}
</div>
   
</section>

       );
    }
}