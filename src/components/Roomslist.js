import React from 'react'
import Allrooms from "./Allrooms";
export default function Roomslist(props) {

    if(props.rooms.lenth===0){
return(

    <div className="empty-search">
    <h1>No Room Match Your Ssearch </h1>
    </div>
)

    }
    return (
        <section className="featured">
        <div className="featured-rooms-center">
{
props.rooms.map(item =>{

    return <Allrooms key={item.id} room={item}/>
})
}

        </div>
           
        </section>
    )
}
