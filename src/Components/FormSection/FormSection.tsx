import React, { useEffect, useState } from "react";
import { Guid } from "guid-typescript";
import "./FormSection.css";
import { ContactServices } from "../../Services/ContactServices";
import { ValidateForm } from "../../Services/Validations";
import { Link, useNavigate, useParams } from "react-router-dom";
import { IContact, IFormData,IStatesObj, IValidates } from "../../Models/Models";
let validateForm: ValidateForm = new ValidateForm();
let contactServices: ContactServices = new ContactServices();
export function FormSection({
  setStatesObj,
  statesObj,
}: {
  setStatesObj: Function;
  statesObj: IStatesObj;
}) {
  const navigate = useNavigate();
  let contactUsed: IContact;
  contactUsed = contactServices.getContactById(statesObj.selectedContactId);
  const [formFields, setFormFields] = useState<IContact>({ ...contactUsed });
  useEffect(() => {
    setFormFields({ ...contactUsed });
    setValidates({
      isNameValidate: false,
      isEmailValidate: false,
      isMobileValidate: false,
    });
  }, [statesObj]);
  const [validates, setValidates] = useState<IValidates>({
    isNameValidate: false,
    isEmailValidate: false,
    isMobileValidate: false,
  });
  function handleChange(e: any) {
    let lableName = e.target.name;
    setFormFields({ ...formFields, [lableName]: e.target.value });
  }
  function cancelHandler() {
    if (statesObj.formAction == "add") {
      setStatesObj({
        showForm: false,
        showDisplayDetails: false,
        selectedContactId: "",
      });
      navigate("/");
    } else {
      setStatesObj({
        showForm: false,
        showDisplayDetails: true,
        selectedContactId: contactUsed.id,
      });
      navigate("/details/" + statesObj.selectedContactId);
    }
    setValidates({
      isNameValidate: false,
      isEmailValidate: false,
      isMobileValidate: false,
    });
  }

  function submitHandler(e: any) {
    e.preventDefault();
    let isName: boolean, isEmail: boolean, isMobile: boolean;
    isName = validateForm.ValidateName(formFields.name);
    isEmail = validateForm.ValidateEmail(formFields.email);
    isMobile = validateForm.ValidateMobile(formFields.mobile);
    if (!isEmail && !isMobile && !isName) {
      if (statesObj.formAction == "add") {
        let newContact: IContact;
        newContact = {
          id: Guid.create().toString(),
          name: formFields.name,
          email: formFields.email,
          mobile: formFields.mobile,
          address: formFields.address,
          website: formFields.website,
          landline: formFields.landline,
        };
        contactServices.AddContact(newContact);
        setStatesObj({
          ...statesObj,
          showForm: false,
          showDisplayDetails: true,
          selectedContactId: newContact.id,
        });
        navigate("/details/" + newContact.id);
      } else {
        if (
          window.confirm(
            "Are you sure you want to edit " + contactUsed.name + "'s details"
          )
        ) {
          let newContact: IContact;
          newContact = {
            id: statesObj.selectedContactId,
            name: formFields.name,
            email: formFields.email,
            mobile: formFields.mobile,
            address: formFields.address,
            website: formFields.website,
            landline: formFields.landline,
          };
          contactServices.UpdateContact(newContact.id, newContact);
          let varForm: IFormData = {
            action: "",
            name: "",
            id: "",
            mobile: "",
            address: "",
            email: "",
            website: "",
            landline: "",
          };
          setFormFields(varForm);
          setStatesObj({
            ...statesObj,
            showForm: false,
            showDisplayDetails: true,
            selectedContactId: newContact.id,
          });
          navigate("/details/" + statesObj.selectedContactId);
        } else {
          setStatesObj({
            ...statesObj,
            showForm: false,
            showDisplayDetails: true,
          });
          navigate("/details/" + statesObj.selectedContactId);
        }
      }
    } else {
      setValidates({
        isNameValidate: isName,
        isEmailValidate: isEmail,
        isMobileValidate: isMobile,
      });
    }
  }
  const { id } = useParams();
  useEffect(() => {
    setStatesObj({ ...statesObj, selectedContactId: id });
    if (id != "add") {
      setStatesObj({ ...statesObj, formAction: "edit" });
    }
  }, [id]);
 
  return (
    <div className="addingDetails">
      <form id="addingDetailsForm" onSubmit={submitHandler}>
        <div>
          <label>Name</label>
          <span className="star">*</span>
        </div>
        <div>
          <input
            type="text"
            id="addName"
            className="inbox"
            name="name"
            value={formFields.name}
            onChange={handleChange}
          />
        </div>
        {validates.isNameValidate && (
          <div className="warnings" id="nameWarning">
            Enter your name
          </div>
        )}
        <div>
          <label>Email</label>
          <span className="star">*</span>
        </div>
        <div>
          <input
            type="text"
            id="addEmail"
            className="inbox"
            name="email"
            value={formFields.email}
            onChange={handleChange}
          />
        </div>
        {validates.isEmailValidate && (
          <div className="warnings" id="emailWarning">
            {" "}
            Enter Valid Email Id
          </div>
        )}
        <div>
          <label id="mobilelabel">
            Mobile<span className="star">*</span>
          </label>
          <label>LandLine</label>
        </div>
        <div>
          <input
            type="text"
            id="addMobile"
            name="mobile"
            value={formFields.mobile}
            onChange={handleChange}
          />
          <input
            type="text"
            id="addLandline"
            name="landline"
            value={formFields.landline}
            onChange={handleChange}
          />
        </div>
        {validates.isMobileValidate && (
          <div className="warnings" id="mobileWarning">
            Enter Mobile Number
          </div>
        )}
        <div>
          <label>Website</label>
        </div>
        <div>
          <input
            type="text"
            className="inbox"
            name="website"
            id="addWebsite"
            value={formFields.website}
            onChange={handleChange}
          />
        </div>
        <div className="warnings" id="websiteWarning"></div>
        <div>
          <label>Address</label>
        </div>
        <div>
          <textarea
            id="addAddress"
            name="address"
            value={formFields.address}
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="buttondiv">
          {statesObj.formAction == "add" && (
            <button className="formbutton" id="addButton" type="submit">
              Add
            </button>
          )}
          {statesObj.formAction == "edit" && (
            <button className="formbutton" id="editButton" type="submit">
              Edit
            </button>
          )}
          <button id="cancelButton" onClick={cancelHandler}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
