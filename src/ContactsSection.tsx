import React from "react";
import { IContact, IStatesObj } from "./Models";
import { DisplayMiniDetails } from "./DisplayMiniDetails";
import { contactList } from "./Data";
export function ContactsSection({statesObj,setStatesObj}:{statesObj:IStatesObj, setStatesObj:Function}){
    return(<div><h3>Contacts</h3>   
    <div className="contactul"><ul className="contact" id="contactBook">
    {contactList.map((contact:IContact)=><DisplayMiniDetails key={contact.id} contact={contact} statesObj={statesObj} setStatesObj={setStatesObj}></DisplayMiniDetails>)}
     </ul></div></div>)
}