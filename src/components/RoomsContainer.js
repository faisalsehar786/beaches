import React from 'react'
import RoomsFilters from "./RoomsFilters";
import Roomslist from "./Roomslist";
import { RoomConsumer } from "../context";
export default function RoomsContainer() {
    return (
        <RoomConsumer>
        {

            (context)=>{

                const {loading,sortedRooms,rooms}=context;
                
              
                return(
                    <div>

            <RoomsFilters rooms={rooms}/>
                <Roomslist rooms={sortedRooms}/>
           
        </div>

                );
            }
        }
        </RoomConsumer>
      
       
    )
}
