import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IContact, IStatesObj } from "./Models";
export function DisplayMiniDetails({contact, setStatesObj,statesObj}:{contact:IContact ,setStatesObj:Function,statesObj:IStatesObj}){    
    function handleClick(id:string){
        setStatesObj({...statesObj,selectedContactId:id,showForm:false,showDisplayDetails:true})
    }
    return(
        <Link to={"/details/"+contact.id} className="linktag">
        <div>
        <li className={`eachContact ${statesObj.selectedContactId==contact.id ? "activeContact" : ""}`} id={contact.id}  onClick={(e)=>handleClick(e.currentTarget.id)} ><h1 className='Name'>
        {contact.name} 
        </h1><p className='email'>
        {contact.email}
        </p><p className='mobile'>
        {contact.mobile} 
        </p></li>
        </div></Link>
    )
}
