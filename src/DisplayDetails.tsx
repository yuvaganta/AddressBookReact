import React, { useState } from "react";
import { IContact, IFormData, IStatesObj } from "./Models";
import { images } from "./images";
import "./DisplayDetails.css";
import { ContactServices } from "./ContactServices";
import { Link, useNavigate } from "react-router-dom";
let contactServices: ContactServices = new ContactServices();
export function DisplayDetails({
  setStatesObj,
  statesObj,
}: {
  setStatesObj: Function;
  statesObj: IStatesObj;
}) {
  const navigate=useNavigate()
  let contact: IContact;
  contact = contactServices.getContactById(statesObj.selectedContactId);
  function editHandler() {
    let varForm: IFormData;
    // varForm={...statesObj.selectedContact,action:"edit"}
    setStatesObj({
      ...statesObj,
      formAction: "edit",
      showForm: true,
      showDisplayDetails: false,
    });
  }
  function deleteHandler() {
    if (window.confirm("Are you sure you want to delete " + contact.name + "'s details")) {
      contactServices.DeleteContact(statesObj.selectedContactId);
      setStatesObj({
        ...statesObj,
        showForm: false,
        showDisplayDetails: false,
      });
      navigate("/")
    } else
      setStatesObj({ ...statesObj, showForm: false, showDisplayDetails: true });
  }
  return (
    <div className="displayDetails">
      <div className="detailsSection">
        <div>
          <h1 id="nameOfContact">{contact.name}</h1>
        </div>
        <div className="editAndDeleteIcons">
          {" "}
          <div>
            <img id="editimage" src={images.editIcon} />
            <Link className="viewbtns" id="editlink" onClick={editHandler} to={"../form/"+contact.id}>
              EDIT
            </Link>
          </div>
          <div>
            <img id="deleteimage" src={images.deleteIcon} />
            <a className="viewbtns" id="deletelink" onClick={deleteHandler}>
              DELETE
            </a>
          </div>
        </div>
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
            <span className="subheads">Mobile: </span>
            <span id="mobileOfContact">{contact.mobile}</span>
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
  );
}
