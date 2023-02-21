import React, { useState } from "react";
import { IContact, IStatesObj } from "./Models";
export function DisplayMiniDetails({contact, setStatesObj,statesObj}:{contact:IContact ,setStatesObj:Function,statesObj:IStatesObj}){    
    function handleClick(id:string){
        setStatesObj({...statesObj,selectedContactId:id,showForm:false,showDisplayDetails:true})
    }
    return(
        <div>
        <li className={`eachContact ${statesObj.selectedContactId==contact.id ? "activeContact" : ""}`} id={contact.id}  onClick={(e)=>handleClick(e.currentTarget.id)} ><p className='Name'>
        {contact.name} 
        </p><p className='email'>
        {contact.email}
        </p><p className='mobile'>
        {contact.mobile} 
        </p></li>
        </div>
    )
}
