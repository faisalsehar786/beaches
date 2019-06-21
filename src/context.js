import React, { Component } from 'react';

import  items from "./data";

const RoomContext = React.createContext();

class RoomProvider extends Component {


    state = {
      rooms:[],
      featuredRooms:[],
      sortedRooms:[],
      loading:true,
      type:"all",
      capacity:1,
      price:0,
      minPrice:0,
      maxPrice:0,
      maxsize:0,
      minsize:0,
      breakfast:false,
      pets:false


    }
 componentDidMount(){
let rooms=this.formatdata(items);
let featuredRooms=rooms.filter(froom => {
    return  froom.featured==true;
});

let maxprice=Math.max(...rooms.map((mprice, index) => mprice.price));
let maxsize=Math.max(...rooms.map((maxsize, index) => maxsize.size));


this.setState({
rooms,
featuredRooms,
minPrice:0,
minsize:0,
maxsize:maxsize,
sortedRooms:rooms,
loading:false,
price:maxprice,
maxPrice:maxprice,


});
 }
formatdata(items){

    let tempItems=items.map((item, index) => {
        let id=item.sys.id;
        let images=item.fields.images.map(image=>image.fields.file.url);
        let room={...item.fields , images , id}
        return room;
    }); 
return tempItems;
}
///////////////////////////////////////////////////////////////////////////////
handlechange=(e)=>{
    const target=e.target;
const itemtypeval=target.type==="checkbox"?target.checked:target.value
    const name=e.target.name;
   this.setState(
       {
           [name]:itemtypeval
       },this.filterrooms
       )
    

   

    };
    ///////////////////////////////////////////
    filterrooms=()=>{
    let {rooms,type,capacity,price,minPrice,maxprice,maxsize,breakfast,pets ,minsize}=this.state
    
    let temprooms=[...rooms];
if(type!=="all"){ temprooms=temprooms.filter(item =>item.type===type );
}
if(capacity!==1){ temprooms=temprooms.filter(item =>item.capacity>=parseInt(capacity));
}
temprooms=temprooms.filter(item =>item.price <= price);

temprooms=temprooms.filter(item =>item.size >= minsize && item.size <= maxsize);
if(breakfast){
    temprooms=temprooms.filter(item =>item.breakfast==true)

}
if(pets){
    temprooms=temprooms.filter(item =>item.pets==true)

}
this.setState({
    sortedRooms:temprooms,
})
}

getRoom=id=>{
    let temprooms=[...this.state.rooms];
    const room=temprooms.find(room=>room.id===id);
    return room;
}

    render() {
        return ( <RoomContext.Provider value = {{...this.state ,
        getRoom:this.getRoom,
        filterrooms:this.filterrooms,
        handlechange:this.handlechange
        
        
        
        }} > 
        { this.props.children } 
        </RoomContext.Provider>);
        }
    }
    const RoomConsumer = RoomContext.Consumer;
    export { RoomProvider, RoomConsumer ,RoomContext}; 