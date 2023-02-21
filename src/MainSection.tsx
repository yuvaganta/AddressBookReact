import React, { Children } from 'react';
import {  IStatesObj } from './Models';
import "./MainSection.css";
import { DisplayDetails } from './DisplayDetails';
import { ContactsSection } from './ContactsSection';
import { FormSection } from './FormSection';
export function MainSection({statesObj,setStatesObj}:{statesObj:IStatesObj, setStatesObj:Function}){
      return(
        <div className='MainSection'>
           <ContactsSection statesObj={statesObj} setStatesObj={setStatesObj}></ContactsSection> 
           {statesObj.showDisplayDetails&&  <DisplayDetails  statesObj={statesObj} setStatesObj={setStatesObj}></DisplayDetails>}  
          {statesObj.showForm && <FormSection  statesObj={statesObj} setStatesObj={setStatesObj}></FormSection> }
        </div>)
}