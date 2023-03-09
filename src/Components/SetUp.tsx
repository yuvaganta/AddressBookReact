import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { HeaderComponent } from "./Header/Header";
import { MainSection } from "./MainSection/MainSection";
import { IStatesObj } from "../Models/Models";

function SetUp() {
  const [statesObj, setStatesObj] = useState<IStatesObj>({
    showForm: false,
    showDisplayDetails: false,
    selectedContactId: "",
    formAction: "add",
  });
  return (
    <div className="SetUp">
      <HeaderComponent
        statesObj={statesObj}
        setStatesObj={setStatesObj}
      ></HeaderComponent>
      <MainSection
        statesObj={statesObj}
        setStatesObj={setStatesObj}
      ></MainSection>
    </div>
  );
}

export default SetUp;
