import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import { images } from "../../images";
import { IStatesObj } from "../../Models/Models";
export function HeaderComponent({
  statesObj,
  setStatesObj,
}: {
  statesObj: IStatesObj;
  setStatesObj: Function;
}) {
  function setShowForm() {
    setStatesObj({
      showForm: true,
      showDisplayDetails: false,
      selectedContactId: "",
      formAction: "add",
    });
  }
  return (
    <div>
      <h1 className="heading">Address Book</h1>
      <nav>
        <div className="navigation">
          <div className="navlinks">
            <div className="navigationitem">
              <Link className="navLinkItems" id="HOMElink" to="/">
                HOME
              </Link>
            </div>
            <div className="navigationitem">
              <Link
                className="navLinkItems"
                id="addlink"
                to="/form/add"
                onClick={() => setShowForm()}
              >
                +ADD
              </Link>
            </div>
          </div>
          <div className="blogimage">
            <img src={images.blogIcon} />
          </div>
        </div>
      </nav>
    </div>
  );
}
