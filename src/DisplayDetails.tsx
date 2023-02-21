import React, { useState } from "react";
import { IContact, IFormData, IStatesObj } from "./Models";
import { images } from "./images";
import "./DisplayDetails.css"
import { ContactServices } from "./ContactServices";
let contactServices:ContactServices=new ContactServices();
export function DisplayDetails({setStatesObj, statesObj}:{setStatesObj:Function,statesObj:IStatesObj}){  
  let contact:IContact;
  contact=contactServices.getContactById(statesObj.selectedContactId)
function editHandler(){
    let varForm:IFormData;
    // varForm={...statesObj.selectedContact,action:"edit"}
    setStatesObj({...statesObj,formAction:"edit",showForm:true,showDisplayDetails:false})
}
function deleteHandler(){
  if ( window.confirm("Are you sure you want to delete " +contact.name +"'s details")){
    contactServices.DeleteContact(statesObj.selectedContactId)
setStatesObj({...statesObj,showForm:false,showDisplayDetails:false})
}
else
setStatesObj({...statesObj,showForm:false,showDisplayDetails:true})
}
        return(            
        <div className="displayDetails">
        <div>
          <span id="nameOfContact">{contact.name}</span>
          <img id="editimage" src={images.editIcon} />
          <a className="viewbtns" id="editlink" onClick={editHandler}>Edit</a>
          <img id="deleteimage" src={images.deleteIcon} />
          <a className="viewbtns" id="deletelink" onClick={deleteHandler}>Delete</a>
           </div>
        <div className="details">
          <div>
            <p>
              <span className="subheads">Email: </span>
              <span id="emailOfContact">{contact.email}</span>
            </p>
          </div>
          <div>
            <p>
              <span className="subheads">Mobile: </span
              ><span id="mobileOfContact">{contact.mobile}</span>
            </p>
          </div>
          <div>
            <p>
              <span className="subheads">Landline: </span>
              <span id="landlineOfContact">{contact.landline}</span>
            </p>
          </div>
          <div>
            <p>
              <span className="subheads">Website: </span>
              <span id="websiteOfContact">{contact.website}</span>
            </p>
          </div>
          <div>
            <p>
              <span className="subheads">Address: </span>
              <span id="addressOfContact">{contact.address}</span>
            </p>
          </div>
        </div>
        </div>
        )
}