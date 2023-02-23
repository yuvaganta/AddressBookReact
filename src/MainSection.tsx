import React, { Children } from 'react';
import {  IStatesObj } from './Models';
import "./MainSection.css";
import { DisplayDetails } from './DisplayDetails';
import { ContactsSection } from './ContactsSection';
import { FormSection } from './FormSection';
import { Route, Routes } from 'react-router-dom';

export function MainSection({statesObj,setStatesObj}:{statesObj:IStatesObj, setStatesObj:Function}){
      return(
        <div className='MainSection'>
           <ContactsSection statesObj={statesObj} setStatesObj={setStatesObj}></ContactsSection> 
           <Routes> 
           <Route path={"/details/"+statesObj.selectedContactId} element= {statesObj.showDisplayDetails&&<DisplayDetails  statesObj={statesObj} setStatesObj={setStatesObj}/>}> </Route>  
           <Route path={"/form/"+statesObj.selectedContactId} element=  {statesObj.showForm && <FormSection  statesObj={statesObj} setStatesObj={setStatesObj}/>}> </Route>
        </Routes>
        </div>)
}