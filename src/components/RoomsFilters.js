import React from 'react'
import { RoomConsumer } from "../context";

import Tittle from "./Tittle";
export default function RoomsFilters({rooms}) {

    let uniquetype = [...new Set( rooms.map(obj => obj.type)) ];
    uniquetype.push("all");
    const uniqguest = [...new Set( rooms.map(obj => obj.capacity)) ];


    return (
      <RoomConsumer>
      {
          (value)=>{
              const {handlechange,type,capacity,price,minPrice,maxPrice,maxsize, minsize, breakfast,pets}=value;
            
              return(
               <section className="filter-container">
               <Tittle title="Search Rooms "/>
                   <form className="filter-form">

                       <div className="form-group">

                           <label htmlFor="type">Room</label>
                           <select name="type" id="type"  onChange={handlechange} value={type} className="form-control">
                          
                          {

                            uniquetype.map((val,index)=>{
                       
                        return <option value={val} key={index}>{val}</option>
                            })
                          }
                       
                           </select>


                        
                       </div>


                       {/* ////////////// Guest */}

                       <div className="form-group">

                           <label htmlFor="Capacity">Guest</label>
                           <select name="capacity" id="capacity"  onChange={handlechange} value={capacity} className="form-control">
                         
                          {

                            uniqguest.map((val,index)=>{
                       
                        return <option value={val} key={index}>{val}</option>
                            })
                          }
                       
                           </select>


                        
                       </div>
                       {/* /////////////////////// */}

                       
                       {/* ////////////// range */}

                       <div className="form-group">

                           <label htmlFor="Price">Room Price ${price}</label>


                       

                        	<input type="range" id="price" className="form-control" value={price} min={minPrice} max={maxPrice} id="price" name="price" onChange={handlechange}  />
                       </div>
                       {/* /////////////////////// */}


                         {/* ////////////// range */}

                         <div className="form-group">

<label htmlFor="Price">Room size</label>



<div className="size-inputs">

 <input type="number" id="minsize" className="size-inputs" value={minsize}  id="price" name="minsize" onChange={handlechange}  />

{/* /////////////////////// */}

  {/* ////////////// range */}








 <input type="number" editable="true" id="maxsize" className="size-inputs" value={maxsize} id="maxsize" name="maxsize" onChange={handlechange}  />
</div>

{/* /////////////////////// */}

<div className="form-group">
<div className="sungle-extra">
<input type="checkbox" name="breakfast" id="breakfast" onChange={handlechange} checked={breakfast}/>
<label> Braekfast</label>
</div>
</div>
<div className="form-group">
<div className="sungle-extra">
<input type="checkbox" name="pets" id="pets" onChange={handlechange} checked={pets}/>
<label> Pets</label>
</div>
</div>
</div>
                   </form>
               </section>
   
              );
          }
      }
      </RoomConsumer>
    
     
  )
}
