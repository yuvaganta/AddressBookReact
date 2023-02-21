import React, { useState } from 'react';
import "./Header.css"
import { images } from './images';
import {  IStatesObj } from './Models';
export function HeaderComponent({statesObj,setStatesObj}:{statesObj:IStatesObj,setStatesObj:Function}){
  function setShowForm() {
    console.log("add clicked")
    setStatesObj({showForm:true,showDisplayDetails:false,selectedContactId:"",formAction:"add"});
  }

    return(
        <div><h1 className="heading">Address Book</h1>
        <nav>
          <div className="navigation">
            <div className="navlinks">
              <div className="navigationitem">HOME</div>
              <div className="navigationitem">
                <a href="#" id="addlink" onClick={()=>setShowForm()}>+ADD</a>
              </div>
            </div>
            <div className="blogimage"><img src={images.blogIcon} /></div>
          </div>
        </nav>
        </div>
        )
}