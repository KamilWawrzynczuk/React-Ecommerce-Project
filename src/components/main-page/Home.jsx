import React, { useState, useEffect, useContext } from "react";
import ChooseCollection from "./ChooseCollection";
import CoverPhoto from "./CoverPhoto";
import Gallery from "./Gallery";
import { fetchContext } from "../../functions/fetchContext";
import { dataContext } from "../../functions/Context";

function Home() {

  return (
    <div>
      <CoverPhoto style={{ marginBottom: "50px" }} />
      <ChooseCollection />
      <Gallery />
    </div>
  );
}

export default Home;
